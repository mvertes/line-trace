# line-trace
[![Build Status](https://travis-ci.org/mvertes/line-trace.svg?branch=master)](https://travis-ci.org/mvertes/line-trace)

Trace print with process PID, source filename, function and line numbers.

## Install
```
$ npm install line-trace
```

## Usage
```js
var trace = require('line-trace');

function f(a) {
  trace(a);
}

f(34);
trace([1, 2, "foo"]);
trace("%s %j", "label", {a:1, b:2});
```

will generate:

```
[125 test.js:4 f] 34
[125 test.js:8 ?] [1,2,"foo"]
[125 test.js:9 ?] label {"a":1,"b":2}
```

## License
[MIT license](./LICENSE).
