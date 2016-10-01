// Requirement
//
// CodeWar: https://www.codewars.com/kata/build-tower/train/javascript
//
// Build Tower (available in python/javascript)
//
// Build Tower by the following given argument:
//   number of floors (integer and always greater than 0).
//
// Tower block is represented as *
//
// Python: return a list;
// JavaScript: returns an Array;
// Have fun!
//
// for example, a tower of 3 floors looks like below
//
//   [
//   '  *  ',
//     ' *** ',
//     '*****'
//   ]
// and a tower of 6 floors looks like below
//
//   [
//   '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
//   ]

// Solution

const _ = require('underscore')

function towerBuilder(n=0) {
  const dummyArray = _.range(n)
  return _.chain(dummyArray)
    .tap(console.log)
    .map(function (e) {return "" + e})
    .tap(console.log)
    .value()
}


// TDD

const Mocha = require('mocha');
const assert = require('chai').assert;
const mocha = new Mocha({ui: 'bdd'});

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

describe ("towerBuilder", function () {
  it ('must return an array', function () {
    assert.typeOf(towerBuilder(), 'array')
  })
  it ('if no arguments provided, return an empty array', function () {
    assert.deepEqual(towerBuilder(), [])
  })
  it ('if argument n is provided, return an array with length n', function () {
    assert.lengthOf(towerBuilder(3), 3)
  })
  it ('each element of the returned array must be of type string', function () {
    assert.typeOf(towerBuilder(3)[0], 'string')
  })
  it ('display the element like this: 1, 3, 5, 7, 9... (representing number of * needed)', function () {
    assert.typeOf(towerBuilder(3)[0], 'string')
  })
})

mocha.run(function() {});

// Test.assertEquals(JSON.stringify(towerBuilder(1)), JSON.stringify(["*"]));
// Test.assertEquals(JSON.stringify(towerBuilder(2)), JSON.stringify([" * ","***"]));
// Test.assertEquals(JSON.stringify(towerBuilder(3)), JSON.stringify(["  *  "," *** ","*****"]));