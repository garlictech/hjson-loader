# hjson loader for webpack

[What is Hjson, the Human JSON](http://hjson.org)

## Installation

`npm install hjson-loader`

## Usage

The loader returns a json after parsing hjson. 

``` javascript
var json = require("hjson!./file.hjson");
// => returns file.json content as json parsed object
```

Query options

* str   - returns the content as raw string (to be used in other loaders)

``` javascript
require "!file?name=[name].json!hjson?str!./file.hjson"
// => emits file.json
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
