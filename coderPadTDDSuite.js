// ***** Requirements

// Implement function sequence, which returns new n-size Array filled according to pattern.
//
// pattern may be:
// - a function that takes two: (element, index), one: (element) or any arguments (similar to map function), then filled running this function, in other words: function describes sequence,
// - number, string or any other object, then filled by copying, this object n-times.
//

// ****** Solution

const _ = require('underscore')


function sequence(n, pattern) {
  return (arguments.length < 1 || n === 0)
    ? []
    : (arguments.length === 1 && pattern === undefined)
      ? [null, null]
      : _.isFunction(pattern)
        ? _.map(_.range(0, n), pattern)
        : _.times(n, function () {return pattern})
}


// ******* Test
// Note: required libraries are hoisted to the top.

const Mocha = require('mocha');
const assert = require('chai').assert;
const mocha = new Mocha({ui: 'bdd'});

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("Test suite", function() {
  it("should work", function() {
    assert(true);
  });
   it("3 should not be equal to 4", function() {
    assert.notEqual(3, 4, 'these numbers are not equal');
  });
   it("3 should not be equal to 3", function() {
    assert.equal(3, 3, 'these numbers are equal');
  });
   it("[1, 2, 3] should be deepEqual to [1, 2, 3]", function() {
    assert.deepEqual([1, 2, 3], [1, 2, 3], '[1, 2, 3] should be deepEqual to [1, 2, 3]');
  });
   it("[1, 2, 3, 4] should be NOT deepEqual to [1, 2, 3]", function() {
    assert.notDeepEqual([1, 2, 3, 4], [1, 2, 3], '[1, 2, 3] should be deepEqual to [1, 2, 3]');
  });
});

describe("Core Function - sqeuence", function () {
   it("if no arguments or n === 0, should return empty array", function() {
     assert.typeOf(sequence(), 'array')
     assert.deepEqual(sequence(), [])
     assert.typeOf(sequence(0), 'array')
     assert.deepEqual(sequence(0), [])
   })
   it("if non-zero n is provided, but no 2nd argument, return [null, null]", function() {
     assert.typeOf(sequence(3), 'array')
     assert.deepEqual(sequence(3), [null, null])
   })
   it("if pattern is a function, return an array of elements (like map)]", function() {
     assert.deepEqual(sequence(3, function (e) {return e}), [0, 1, 2])
     assert.deepEqual(sequence(3, function (e) {return e + 10}), [10, 11, 12])
     assert.deepEqual(sequence(3, function (e,i,ar) {return ar[i]+10 }), [10, 11, 12])
     assert.deepEqual(sequence(3, function (e,i,ar) {return e + ar[i]+10 }), [10, 12, 14])
   })
  it("if pattern is a string, number, object, object, boolean etc (i.e. non function), return an array of that object n times", function() {
    assert.deepEqual(sequence(3, 'hello'), ['hello', 'hello', 'hello'])
    assert.deepEqual(sequence(3, 4), [4, 4, 4])
    assert.deepEqual(
      sequence(3, {name: 'johnny', age: 99}),
      [
        {name: 'johnny', age: 99},
        {name: 'johnny', age: 99},
        {name: 'johnny', age: 99},
      ]
    )
    assert.deepEqual(sequence(3, true), [true, true, true])
    assert.deepEqual(sequence(3, null), [null, null, null])
    assert.deepEqual(sequence(3, undefined), [undefined, undefined, undefined])
  })
})

describe("Helper Functions", function () {

})

mocha.run(function() {});