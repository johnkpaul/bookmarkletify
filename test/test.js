var bookmarkletify = require('../bookmarkletify');

var vows = require('vows');
var assert = require('assert');

vows.describe('bookmarkletify').addBatch({
  'when passed a javascript string': {
    topic: function () {
      return bookmarkletify('alert( window.location    )');
    },
    'returns a bookmarklet': function (topic) {
      assert.equal(topic, 'javascript:(function(){;alert(window.location);})()');
    }
  },
  'when passed a javascript string with non-url-safe characters': {
    topic: function () {
      return bookmarkletify('alert("http://google.com/test test");');
    },
    'returns a url-safe bookmarklet': function (topic) {
      assert.equal(topic, 'javascript:(function(){;alert(%22http://google.com/test%20test%22);})()');
    }
  }
}).export(module);
