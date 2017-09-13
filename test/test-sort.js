'use strict'

const bundle = require('../dist/bundle')

const Utils = bundle.Utils
const BubbleSort = bundle.BubbleSort
const InsertionSort = bundle.InsertionSort
const SelectionSort = bundle.SelectionSort
const QuickSort = bundle.QuickSort
const MergeSort = bundle.MergeSort

require('mocha')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

describe('Utils', () => {
    it('should be able to compare numbers correctly ', () => {
        
        assert.isTrue(Utils.compare( 1, 2) < 0 )
        assert.isTrue(Utils.compare( 11, 2) > 0 )
        assert.isTrue(Utils.compare( -11, -11) == 0 )
        assert.isTrue(Utils.compare( 'a', 'b') < 0 )
        assert.isTrue(Utils.compare( 'a', 'a') == 0 )
        assert.isTrue(Utils.compare( 'A', 'a') < 0 )
        assert.isTrue(Utils.compare( '@', 'a') < 0 )
        assert.isTrue(Utils.compare( 'abc', 'acb') < 0 )
    })
})

describe('BubbleSort', () => {
    it('should be able to sort numbers - sample 1 ', () => {
        let numbers = [ 4, 2, 5, 6, 1, 9]
        BubbleSort.sort(numbers)
        assert.deepEqual(numbers, [ 1, 2, 4, 5, 6, 9])
    })

    it('should be able to sort numbers - sample 2 ', () => {
        let numbers = [ 5, 4, 2, 5, 6, 1, 1, 9]
        BubbleSort.sort(numbers)
        assert.deepEqual(numbers, [ 1,1, 2, 4, 5,5, 6, 9])
    })

     it('should be able to sort charaters - sample 1 ', () => {
        let numbers = [ '12', '3', '7', '-2', '9', '8']
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ '-2', '12', '3', '7', '8', '9' ])
    })

    it('should be able to sort characters - sample 2 ', () => {
        let numbers = [ 'a', '2', '5', '0', 'A', 'c', '@']
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ '0', '2', '5', '@', 'A', 'a', 'c' ])
    })

    it('should be able to sort words - sample 2 ', () => {
        let numbers = [ 'abc', 'ABC', 'cba', '100', 'A', '!', '@']
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ '!' , '100' , '@' , 'A' , 'ABC' , 'abc' , 'cba'])
    })
})



describe('InsertionSort', () => {
    it('should be able to sort numbers - sample 1 ', () => {
        let numbers = [ 4, 2, 5, 6, 1, 9]
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ 1, 2, 4, 5, 6, 9])
    })

    it('should be able to sort numbers - sample 2 ', () => {
        let numbers = [ 5, 4, 2, 5, 6, 1, 1, 9]
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ 1, 1, 2, 4, 5, 5, 6, 9])
    })

    it('should be able to sort charaters - sample 1 ', () => {
        let numbers = [ '12', '3', '7', '-2', '9', '8']
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ '-2', '12', '3', '7', '8', '9' ])
    })

    it('should be able to sort characters - sample 2 ', () => {
        let numbers = [ 'a', '2', '5', '0', 'A', 'c', '@']
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ '0', '2', '5', '@', 'A', 'a', 'c' ])
    })

    it('should be able to sort words - sample 2 ', () => {
        let numbers = [ 'abc', 'ABC', 'cba', '100', 'A', '!', '@']
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ '!' , '100' , '@' , 'A' , 'ABC' , 'abc' , 'cba'])
    })
})

describe('SelectionSort', () => {
    it('should be able to sort numbers - sample 1 ', () => {
        let numbers = [ 4, 2, 5, 6, 1, 9]
        SelectionSort.sort(numbers)
        assert.deepEqual(numbers, [ 1, 2, 4, 5, 6, 9])
    })

    it('should be able to sort numbers - sample 2 ', () => {
        let numbers = [ 5, 4, 2, 5, 6, 1, 1, 9]
        SelectionSort.sort(numbers)
        assert.deepEqual(numbers, [ 1, 1, 2, 4, 5, 5, 6, 9])
    })

    it('should be able to sort charaters - sample 1 ', () => {
        let numbers = [ '12', '3', '7', '-2', '9', '8']
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ '-2', '12', '3', '7', '8', '9' ])
    })

    it('should be able to sort characters - sample 2 ', () => {
        let numbers = [ 'a', '2', '5', '0', 'A', 'c', '@']
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ '0', '2', '5', '@', 'A', 'a', 'c' ])
    })

    it('should be able to sort words - sample 2 ', () => {
        let numbers = [ 'abc', 'ABC', 'cba', '100', 'A', '!', '@']
        InsertionSort.sort(numbers)
        assert.deepEqual(numbers, [ '!' , '100' , '@' , 'A' , 'ABC' , 'abc' , 'cba'])
    })
})


describe('QuickSort', () => {
    it('should be able to sort numbers - sample 1 ', () => {
        let numbers = [ 4, 2, 5, 6, 1, 9]
        QuickSort.sort(numbers)
        assert.deepEqual(numbers, [ 1, 2, 4, 5, 6, 9])
    })
})


describe('MergeSort', () => {
    it('should be able to sort numbers - sample 1 ', () => {
        let numbers = [ 4, 2, 5, 6, 1, 9]
        MergeSort.sort(numbers)
        assert.deepEqual(numbers, [ 1, 2, 4, 5, 6, 9])
    })

})