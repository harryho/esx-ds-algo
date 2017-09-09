'use strict'

const bundle = require('../dist/bundle')
const StackList = bundle.StackList
const StackArray = bundle.StackArray
const DoublyLinkedListNode = bundle.DoublyLinkedListNode
const DoublyLinkedList = bundle.DoublyLinkedList
require('mocha')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

describe('StackList', () => {
    it('should be able to create a new stack', () => {
        let stack = new StackList()
        assert.isNotNull(stack)
        assert.equal(stack.count, 0)
    })

    it('should be able to push an item to a stack ', () => {
        let stack = new StackList()
        stack.push(1)
        
        assert.isNotNull(stack.count, 1)
        assert.equal(stack.peek(), 1)
    })

    it('should be able to pop an item from a stack ', () => {
        let stack = new StackList()
        stack.push(1)
        
        assert.isNotNull(stack.count, 1)
        assert.equal(stack.pop(), 1)
        assert.isNotNull(stack.count, 0)
    })

    it('should be able to pop multiple items from a stack as LIFO', () => {
        let stack = new StackArray()
        stack.push(1)
        stack.push(2)
        stack.push(3)

        assert.isNotNull(stack.count, 3)
        assert.equal(stack.pop(), 3)
        assert.equal(stack.pop(), 2)
        assert.equal(stack.pop(), 1)
        assert.isNotNull(stack.count, 0)
    })

    it('should be able to clear all items', () => {
        let stack = new StackList()
        stack.push(1)
        stack.push(2)

        assert.isNotNull(stack.count, 2)
        stack.clear()
        assert.isNotNull(stack.count, 0)
    })

    it('should throw error to pop any item from an empty stack', () => {

        let stack = new StackList()

        expect(() =>{  stack.pop() }).to.throw(Error, 'The stack is empty' )
    });


    it('should throw error to peek any item from an empty stack', () => {

        let stack = new StackList()

        expect(() =>{  stack.peek() }).to.throw(Error, 'The stack is empty' )
    });

    it('should be able to iterate all the items', () => {

        let stack = new StackList()
        let v = 0
        v += 1
        stack.push(v)
        v += 1
        stack.push(v)

        for (let item of stack.iterator()) {
            if (item !== undefined) {
                expect(item).to.equal(v)
                v -= 1
            }
        }
    })
})



describe('StackArray', () => {
    it('should be able to create a new stack', () => {
        let stack = new StackArray()
        assert.isNotNull(stack)
        assert.equal(stack.count, 0)
    })

    it('should be able to push an item to a stack ', () => {
        let stack = new StackArray()
        stack.push(1)
        
        assert.isNotNull(stack.count, 1)
        assert.equal(stack.peek(), 1)
    })

    it('should be able to pop an item from a stack ', () => {
        let stack = new StackArray()
        stack.push(1)
        
        assert.isNotNull(stack.count, 1)
        assert.equal(stack.pop(), 1)
        assert.isNotNull(stack.count, 0)
    })

     it('should be able to pop multiple items from a stack as LIFO', () => {
        let stack = new StackArray()
        stack.push(1)
        stack.push(2)
        stack.push(3)

        assert.isNotNull(stack.count, 3)
        assert.equal(stack.pop(), 3)
        assert.equal(stack.pop(), 2)
        assert.equal(stack.pop(), 1)
        assert.isNotNull(stack.count, 0)
    })

    it('should be able to clear all items', () => {
        let stack = new StackArray()
        stack.push(1)
        stack.push(2)

        assert.isNotNull(stack.count, 2)
        stack.clear()
        assert.isNotNull(stack.count, 0)
    })

    it('should throw error to pop any item from an empty stack', () => {

        let stack = new StackArray()

        expect(() =>{  stack.pop() }).to.throw(Error, 'The stack is empty' )
    });


    it('should throw error to peek any item from an empty stack', () => {

        let stack = new StackArray()

        expect(() =>{  stack.peek() }).to.throw(Error, 'The stack is empty' )
    });

    it('should be able to iterate all the items', () => {

        let stack = new StackArray()
        let v = 0
        v += 1
        stack.push(v)
        v += 1
        stack.push(v)

        for (let item of stack.iterator()) {
            if (item !== undefined) {
                expect(item).to.equal(v)
                v -= 1
            }
        }
    })
})