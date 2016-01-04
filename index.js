/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Zsolt R. Molnar zsolt@zsoltmolnar.hu, founder of GarlicTech Ltd. (http://www.garlictech.com)
*/
var HJSON = require('hjson');
var loaderUtils = require("loader-utils");

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var value = typeof source === "string" ? HJSON.parse(source) : source;
  this.value = [value];
  var query = loaderUtils.parseQuery(this.query);
  stringified = JSON.stringify(value, undefined, "\t");
  return query.str ? stringified : 'module.exports = ' + stringified + ';';
}