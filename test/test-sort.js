'use strict'

const bundle = require('../dist/bundle')
const BubbleSort = bundle.BubbleSort


require('mocha')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert


describe('BubbleSort', () => {
    it('should be able to sort numbers', () => {
        let numbers = [ 4, 2, 5, 6, 1, 9]
        BubbleSort.sort(numbers)
        assert.deepEqual(numbers, [ 1, 2, 4, 5, 6, 9])
    })
})