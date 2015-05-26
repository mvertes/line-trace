#!/usr/bin/env node

var trace = require('./');

trace.setTracer(console.error)
trace('res: %j', {x: 2});
