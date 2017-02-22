Node.js module for interfacing with [Desk.com](http://desk.com)'s API v1. 

Currently it just provides read only access to some of the RESTful resources
exposed by the Desk.com API.

# Install

```bash
npm install desk-api
```

# Configure

The client requires the creation of OAuth identification and authorization tokens
before using the library. These need to be created by going to the Admin interface
in Desk, clicking on Settings >> API >> My Applications. If you now click the button
that says 'Add API Application', you should get a dialog that allows you to create a
new set of OAuth tokens. Fill in the name and website URL fields (these are the two
required), press 'Add', and the new application config should be generated.

To configure the client you'll then need:

 * your subdomain - e.g. if your desk domain is `example.desk.com`, then your subdomain will be `example`
 * your consumer key - this is the value labelled 'Key' you should be able to see under the app configuration you just generated
 * your consumer secret - this is the value labelled 'Secret'
 * your token - if you click on 'Your Access Token', then this is the value labelled 'Token'
 * your token secret - if you click on 'Your Access Token', then this is the value labelled 'Token Secret'

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
      token: 'token',
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

# See Also

If you are looking for a Node package to interact with desk.com's multipass
SSO, then you're probably looking for:
[desk](https://github.com/bug-buster/node-desk).

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
