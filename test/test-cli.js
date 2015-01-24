var cli = require('../bin/cli');
var fs = require('fs');
var path = require('path')
var vows = require('vows');
var assert = require('assert');
var infile = path.join(__dirname,'cli-input.js')
var outfile = path.join(__dirname,'cli-output.txt')

vows.describe('bookmarkletify cli').addBatch({
  'when passed a javascript file': {
    topic: function () {
      cleanup()
      var opts = {
        infile: infile,
        outfile: outfile
      }
      cli(opts, this.callback);
    },
    'writes a bookmarklet to the outfile': function (topic) {
      var txt = fs.readFileSync(outfile, "utf8")
      assert.equal(txt, 'javascript:(function(){;alert(%22http://google.com/test%20test%22);})()\n');
      cleanup()
    }
  }
}).export(module);


function cleanup () {
  if (fs.existsSync(outfile)) fs.unlinkSync(outfile) // remove the test output if there.
}
