const assert = require('assert'); // Common JS syntax (CJS)
const myFuncs = require('../my-function');
const sayHello = myFuncs.sayHello;
const thisThingThrows = myFuncs.thisThingThrows;

describe('tests for functions from "my-function.js"', () => {

  describe('tests for sayHello function', () => {

    it('returns "hello there Alice" when given the string "Alice"', () => {
      // test code goes here
      const actual = sayHello('Alice');
      const expected = 'hello there Alice';
    
      assert.strictEqual(actual, expected);
    });
    
    it('returns "hello there Carol" when given the string "Carol"', () => {
      assert.strictEqual(sayHello('Carol'), 'hello there Carol');
    });

  });

  describe('tests for thisThingThrows function', () => {

    it('throws an Error', () => {
      assert.throws(() => thisThingThrows(), TypeError);
    });

  });

});
