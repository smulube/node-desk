var vows = require('vows'),
    assert = require('assert'),
    desk = require('../lib/desk');

vows.describe('desk').addBatch({
  'methods': {
    topic: desk.createClient({
      subdomain: "foo",
      consumer_key: "consumer_key",
      consumer_secret: "con
  }
});
