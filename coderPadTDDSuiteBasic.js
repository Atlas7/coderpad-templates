const Mocha = require ('mocha')
const assert = require('chai').assert
const mocha = new Mocha ({ui: 'bdd'})

mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('Test suite', function () {
  it('should work', function () {
    assert(true)
  })
})

mocha.run(function () {})