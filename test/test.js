var bookmarkletify = require('../bookmarkletify');

var vows = require('vows');
var assert = require('assert');

vows.describe('bookmarkletify creates bookmarklet').addBatch({
  'Bookmarkletify': {
    topic: bookmarkletify,
    'creates bookmarklet, when passed source': function(){
      var source = 'alert( window.location    )';
      var bookmarkletString = bookmarkletify(source);
      assert.equal(bookmarkletString, 'javascript:(function(){;alert(window.location);})()');
    }, 
    'will encode uris, if there': function(){
      var source = 'alert("http://google.com/test test");';
      var bookmarkletString = bookmarkletify(source);
      assert.equal(bookmarkletString, 'javascript:(function(){;alert(%22http://google.com/test%20test%22);})()');
    }
  }
}).export(module);
