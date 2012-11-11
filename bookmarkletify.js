var jsp = require("uglify-js").parser;
var pro = require("uglify-js").uglify;

module.exports = function(source){
  var min = encodeURI(minify(source));
  var result = 'javascript:(function(){;' + min + ';})()';
  return result;
}

function minify(source){
  var ast = jsp.parse(source); 
  return pro.gen_code(ast);
}
