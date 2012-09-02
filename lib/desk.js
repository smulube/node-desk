var querystring = require('querystring');
var OAuth = require('oauth').OAuth;

var Client = function(config) {
  this.subdomain = config.subdomain;
  this.oauthToken = config.token;
  this.oauthTokenSecret = config.token_secret;

  this.oauth = new OAuth(
    null,
    null,
    config.consumer_key,
    config.consumer_secret,
    config.version || "1.0",
    null,
    'HMAC-SHA1'
  );

  return this;
};

Client.prototype.get = function(resource, params, callback) {
  return this.oauth.get(
    'http://' + this.subdomain + '.desk.com/api/v1/' + resource + '?' + querystring.stringify(params),
    this.oauthToken, 
    this.oauthTokenSecret, 
    function(error, data, response) {
      if(!error) data = JSON.parse(data);
      callback(error, data, response);
    }
  );
}

/**
 * Parameters:
 *   params - hash of key/value pairs to be sent as query parameters
 *   callback - function to be called on error or success
 * Examples:
 *  desk.cases({ status: 'new,open' }, function(error, data) {});
 */
Client.prototype.cases = function(params, callback) {
  return this.get('cases', params, callback);
};

/**
 * Parameters:
 *   id - id of the case
 *   params - hash of key/value pairs to be sent as query parameters
 *   callback - function to be called on error or success
 * Example:
 *  desk.case(123, {}, function(error, data) {});
 */
Client.prototype.case = function(id, params, callback) {
  return this.get('cases/' + id, params, callback);
};

/**
 * Parameters:
 *   params - hash of key/value pairs to be sent as query parameters
 *   callback - function to be called on error or success
 * Examples:
 *  desk.customers({ email: 'bob@example.com'}, function(error, data) {});
 */
Client.prototype.customers = function(params, callback) {
  return this.get('customers', params, callback);
};

/**
 * Parameters:
 *   id - id of the customer
 *   params - hash of key/value pairs to be sent as query parameters
 *   callback - function to be called on error or success
 * Example:
 *  desk.customer(123, {}, function(error, data) {});
 */
Client.prototype.customer = function(id, params, callback) {
  return this.get('customer/' + id, params, callback);
};

/**
 * Parameters:
 *   params - hash of key/value pairs to be sent as query parameters
 *   callback - function to be called on error or success
 * Examples:
 *  desk.interactions({ case_id: 1234}, function(error, data) {});
 */
Client.prototype.interactions = function(params, callback) {
  return this.get('interactions', params, callback);
};

/**
 * Parameters:
 *   params - hash of key/value pairs to be sent as query parameters
 *   callback - function to be called on error or success
 * Examples:
 *  desk.groups({}, function(error, data) {});
 */
Client.prototype.groups = function(params, callback) {
  return this.get('groups', params, callback);
};

/**
 * Parameters:
 *   id - id of the group
 *   params - hash of key/value pairs to be sent as query parameters
 *   callback - function to be called on error or success
 * Example:
 *  desk.group(123, {}, function(error, data) {});
 */
Client.prototype.group = function(id, params, callback) {
  return this.get('group/' + id, params, callback);
};

/**
 * Parameters:
 *   params - hash of key/value pairs to be sent as query parameters
 *   callback - function to be called on error or success
 * Examples:
 *  desk.users({}, function(error, data) {});
 */
Client.prototype.users = function(params, callback) {
  return this.get('users', params, callback);
};

/**
 * Parameters:
 *   id - id of the agent
 *   params - hash of key/value pairs to be sent as query parameters
 *   callback - function to be called on error or success
 * Example:
 *  desk.user(123, {}, function(error, data) {});
 */
Client.prototype.user = function(id, params, callback) {
  return this.get('user/' + id, params, callback);
};


// @see http://dev.desk.com/docs/api
module.exports.createClient = function(config) {
 return new Client(config);
};
