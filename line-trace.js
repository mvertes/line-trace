var tracer = console.log;

function getStack() {
	var orig = Error.prepareStackTrace;
	Error.prepareStackTrace = function (_, stack) {return stack;};
	var err = new Error;
	Error.captureStackTrace(err, arguments.callee);
	var stack = err.stack;
	Error.prepareStackTrace = orig;
	return stack;
}

module.exports = function trace() {
	var args = Array.prototype.slice.call(arguments);
	var stack = getStack();
	var file = stack[1].getFileName() || '?';
	var line = stack[1].getLineNumber();
	var func = stack[1].getFunctionName() || '?';

	file = file.replace(/.*\//, '');
	if (args.length === 1) {
		args.splice(0, 0, '[%d %s:%s %s] %j', process.pid, file, line, func);
	} else {
		args[0] = '[%d %s:%s %s] ' + args[0];
		args.splice(1, 0, process.pid, file, line, func);
	}
	tracer.apply(this, args);
};

module.exports.setTracer = function setTracer(f) {tracer = f;}
