// import assert from 'assert'; // ECMAScript Module syntax (ESM)
const assert = require('assert'); // Common JS syntax (CJS)

const myFuncs = require('./my-function');
console.log('myFuncs', myFuncs);
const sayHello = myFuncs.sayHello;

const actual = sayHello('Alice');
const expected = 'hello there Alice';

assert.strictEqual(actual, expected);

// console.log('actual', actual);
// console.log('expected', expected);
