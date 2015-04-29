var trace = require('./');

function f(a) {
	trace(a);
}

f(34);
trace([1, 2, "foo"]);
trace("%s %s", "trace", trace.toString());
