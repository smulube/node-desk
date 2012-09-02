Node.js module for interfacing with [Desk.com](http://desk.com)'s API v1. 

Currently it just provides read only access to some of the RESTful resources
exposed by the Desk.com API. Requires the creation of all the OAuth
identification and authorization tokens before using the library. These can be
created without going through the whole OAuth 1.0 handshake procedure by going
to the Admin interface in Desk, clicking on Settings, then API, then My
Applications.

If you create a new application it will generate an application key and secret
for you, then you'll also need your access token and token secret, accessible
by clicking "Your Access Token".

# Install

    npm install desk

# Resources

Currently these are the resources that the client exposes as methods on the
client:

 * cases - list and filter cases
 * case - details of a specific individual case
 * customers - list and filter customers
 * customer - details of a specific individual customer
 * interactions - list and filter interactions
 * groups - list and filter agent groups
 * group - details of a specific individual group
 * users - list and filter agents
 * user - details of a specific individual user

# Usage

    // Obtain application access tokens via API settings in Desk.com admin section

    var desk = require('desk').createClient({
      subdomain: 'yoursubdomain',
      consumer_key: 'key',
      consumer_secret: 'secret',
      token: 'token'
      token_secret: 'token_secret'
    });

    desk.cases({status: 'new,open'}, function(error, data) {
      console.log(error);
      console.log(data);
    });

    desk.case(1234, {}, function(error, data) {
      console.log(error);
      console.log(data);
    });

The client also has a lower level `get` method that can be used to fetch
resources not included in the above list of resources.

    desk.get('macros', { page: 2 }, function(error, data) {
      console.log(error);
      console.log(data);
    });

# Acknowledgements

This code is completely ripped off from the [Yelp API
client](https://github.com/olalonde/node-yelp), which similarly provides a
client wrapper for an OAuth 1.0 JSON API.

# Todo

Tests would be good. This was just hacked together to support a hubot script,
so is almost certainly broken.

# License

Copyright (C) 2012 Sam Mulube sam.mulube@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
