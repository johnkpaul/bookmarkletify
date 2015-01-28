var fs = require('fs')
var concat = require('concat-stream')
var streamify = require('string-to-stream')
var bookmarkletify = require('../bookmarkletify')

module.exports = function (opts, cb) {
  cb = cb || function () {}
  var input = opts.infile ? fs.createReadStream(opts.infile) : process.stdin
  var output = opts.outfile ? fs.createWriteStream(opts.outfile) : process.stdout
  input.on('error', boom)
  output.on('error', boom)
  output.on('close', cb)
  input.pipe(concat(function (buffer) {
    // TODO: bookmarkletify could be a stream transform...
    streamify(bookmarkletify(buffer.toString()) + '\n').pipe(output)
  }))
}

function boom (err) {
  console.error(err)
  process.exit(1)
}

