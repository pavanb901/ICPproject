import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Debug "mo:base/Debug";
import Blob "mo:base/Blob";
import Result "mo:base/Result";
import Error "mo:base/Error";
import Option "mo:base/Option";

actor BusinessMetrics {
  // Define metric types
  type MetricType = {
    #Sales;
    #Users;
    #Funding;
  };

  // Define a metric
  type Metric = {
    metricType : MetricType;
    value : Nat;
    timestamp : Nat;
  };

  // Define a business
  type Business = {
    id : Text;
    name : Text;
    metrics : [Metric];
  };

  // Store businesses in a HashMap
  var businesses : HashMap.HashMap<Text, Business> = HashMap.HashMap<Text, Business>(10, Text.equal, Text.hash);

  // Add a new business
  public func addBusiness(id : Text, name : Text) : async () {
    let business : Business = {
      id = id;
      name = name;
      metrics = [];
    };
    businesses.put(id, business);
    Debug.print("Business added: " # name);
  };

  // Add a metric to a business
  public func addMetric(businessId : Text, metricType : MetricType, value : Nat, timestamp : Nat) : async () {
    switch (businesses.get(businessId)) {
      case (?business) {
        let newMetric : Metric = {
          metricType = metricType;
          value = value;
          timestamp = timestamp;
        };
        let updatedMetrics = Array.append(business.metrics, [newMetric]);
        let updatedBusiness : Business = {
          id = business.id;
          name = business.name;
          metrics = updatedMetrics;
        };
        businesses.put(businessId, updatedBusiness);
        Debug.print("Metric added to business: " # business.name);
      };
      case null {
        Debug.print("Business not found with ID: " # businessId);
      };
    };
  };

  // Get all metrics for a business
  public query func getMetrics(businessId : Text) : async [Metric] {
    switch (businesses.get(businessId)) {
      case (?business) {
        return business.metrics;
      };
      case null {
        return [];
      };
    };
  };

  // Get all businesses
  public query func getBusinesses() : async [Business] {
    return Iter.toArray(businesses.vals());
  };

  // Define the HTTP request type for the Management Canister
  type HttpRequest = {
    url : Text;
    method : Text;
    headers : [(Text, Text)];
    body : Blob;
  };

  type HttpResponse = {
    status_code : Nat16;
    headers : [(Text, Text)];
    body : Blob;
  };

  // Management Canister reference for HTTP requests
  let ic : actor {
    http_request : HttpRequest -> async HttpResponse;
  } = actor ("aaaaa-aa");

  // Send data to an external networking platform
  public func sendDataToPlatform(url : Text, data : Text) : async Text {
    let request : HttpRequest = {
      method = "POST";
      url = url;
      headers = [("Content-Type", "application/json")];
      body = Text.encodeUtf8(data); // Directly encode Text to Blob
    };

    try {
      let response : HttpResponse = await ic.http_request(request);
    

      // Safely decode the response body
      let responseBody = switch (Text.decodeUtf8(response.body)) {
        case (null) {
          Debug.print("Response body is not valid UTF-8");
          "Non-UTF-8 response body";
        };
        case (?text) {
          Debug.print("Response from external platform: " # text);
          text;
        };
      };
      return responseBody;
    } catch (e) {
      Debug.print("Error sending data to platform: " # Error.message(e));
      return "Error: " # Error.message(e);
    };
  };

  // Example function to send business metrics to an external platform
  public func sendBusinessMetricsToPlatform(businessId : Text, platformUrl : Text) : async Text {
    switch (businesses.get(businessId)) {
      case (?business) {
        let metricsJson = "{ \"businessId\": \"" # business.id # "\", \"name\": \"" # business.name # "\", \"metrics\": " # debug_show(business.metrics) # " }";
        return await sendDataToPlatform(platformUrl, metricsJson);
      };
      case null {
        return "Business not found";
      };
    };
  };
};