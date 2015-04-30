# line-trace
Trace print with source filename, function and line numbers.

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
[test.js:4 f] 34
[test.js:8 ?] [1,2,"foo"]
[test.js:9 ?] label {"a":1,"b":2}
```

## License
[MIT license](./LICENSE).
