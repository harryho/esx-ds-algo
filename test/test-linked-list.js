// import {
//     LinkedListNode, LinkedList, 
//     DoublyLinkedListNode, DoublyLinkedList 
// } from '../dist/bundle'
// import 'mocha'
// import {assert, expect} from 'chai'

'use strict'

const bundle = require('../dist/bundle')
const LinkedListNode = bundle.LinkedListNode
const LinkedList = bundle.LinkedList
const DoublyLinkedListNode = bundle.DoublyLinkedListNode
const DoublyLinkedList = bundle.DoublyLinkedList
require('mocha')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

describe('Linked List Node', () => {
    it('should be able to create a new node', () => {
        let node = new LinkedListNode(1)
        assert.isNotNull(node.value)
        assert.equal(node.value, 1)
    });

    it('should be able to create a new node with next node', () => {
        let node = new LinkedListNode(1)
        let next = new LinkedListNode(2)
        node.next = next
        assert.isNotNull(node.next)
        assert.equal(node.next.value, 2)
    });
})

describe('Linked List', () => {

    it('should be able to create a new empty list', () => {

        let list = new LinkedList()

        assert.isNotNull(list)
        assert.isNull(list.first)
        assert.isNull(list.last)
        assert.equal(list.count, 0)
    });

    it('should be able to create a new list and add one node', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode(1))

        assert.isNotNull(list)
        assert.equal(list.first.value, 1)
        assert.equal(list.last.value, 1)
        assert.equal(list.count, 1)
    });

    it('should be able to create a new list and add new node as first node', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode(1))
        list.addFirst(new LinkedListNode(2))

        assert.equal(list.first.value, 2)
        assert.equal(list.last.value, 1)
        assert.equal(list.count, 2)
    });

    it('should be able to create a new list and add new node as last node', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode(1))
        list.addLast(new LinkedListNode(2))

        assert.equal(list.first.value, 1)
        assert.equal(list.last.value, 2)
        assert.equal(list.count, 2)
    });

    it('should be able to remove the first node from not empty list', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode(1))

        assert.equal(list.first.value, 1)
        assert.equal(list.count, 1)

        list.removeFirst()
        assert.equal(list.count, 0)
    });

    it('should be able to remove the last node from not empty list', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode(1))
        list.add(new LinkedListNode(2))

        list.removeLast()
        assert.equal(list.first.value, 2)
        assert.equal(list.count, 1)
    });

    it('should be able to remove all nodes from not empty list', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode(1))
        list.add(new LinkedListNode(2))

        list.removeFirst()
        list.removeFirst()
        assert.equal(list.count, 0)
    });

    it('should be able to clear all nodes', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode(1))
        list.add(new LinkedListNode(2))

        list.clear()
        assert.equal(list.count, 0)
    });

    it('should be able to find the node with the same number', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode(1))

        assert.isTrue(list.contains(new LinkedListNode(1)))
    });

    it('should be able to find the node with the same object', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode({"key": "value"}))

        assert.isTrue(list.contains(new LinkedListNode({"key": "value"})))
    });

    it('should be able to remove the node with the same object value', () => {

        let list = new LinkedList()
        list.add(new LinkedListNode({"key": "value"}))

        assert.equal(list.count, 1)
        list.remove(new LinkedListNode({"key": "value"}))
        assert.equal(list.count, 0)
    });

    it('should be able to iterate all the nodes within the list', () => {

        let list = new LinkedList()
        let v = 0
        v += 1
        list.add(new LinkedListNode(v))
        v += 1
        list.add(new LinkedListNode(v))

        for (let item of list.iterator()) {
            if (item !== undefined) {
                expect(item).to.equal(v)
                v -= 1
            }
        }
    });

    it('should be able to copy all the value of to a new array', () => {

        let list = new LinkedList()
        let v = 0
        v += 1
        list.add(new LinkedListNode(v))
        v += 1
        list.add(new LinkedListNode(v))

        let values = []
        list.copyTo(values,0)


        for (let item of values) {
            if (item !== undefined) {
                expect(item).to.equal(v)
                v -= 1
            }
        }

    });
})


describe('Doubly Linked List Node', () => {
    it('should be able to create a new node', () => {
        let node = new DoublyLinkedListNode(1)
        assert.isNotNull(node.value)
        assert.equal(node.value, 1)
    });

    it('should be able to create a new node with next node', () => {
        let node = new DoublyLinkedListNode(1)
        let next = new DoublyLinkedListNode(2)
        node.next = next
        next.previous = node
        assert.isNotNull(node.next)
        assert.equal(node.next.value, 2)
        assert.equal(next.previous.value, 1)
    });
})


describe('Doubly Linked List', () => {

    it('should be able to create a new empty list', () => {

        let list = new DoublyLinkedList()

        assert.isNotNull(list)
        assert.isNull(list.first)
        assert.isNull(list.last)
        assert.equal(list.count, 0)
    });

    it('should be able to create a new list and add one node', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode(1))

        assert.isNotNull(list)
        assert.equal(list.first.value, 1)
        assert.equal(list.last.value, 1)
        assert.equal(list.count, 1)
    });

    it('should be able to create a new list and add new node as first node', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode(1))
        list.addFirst(new DoublyLinkedListNode(2))

        assert.equal(list.first.value, 2)
        assert.equal(list.last.value, 1)
        assert.equal(list.count, 2)
    });

    it('should be able to create a new list and add new node as last node', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode(1))
        list.addLast(new DoublyLinkedListNode(2))

        assert.equal(list.first.value, 1)
        assert.equal(list.first.next.value, 2)
        assert.equal(list.last.value, 2)
        assert.equal(list.last.previous.value, 1)
        assert.equal(list.count, 2)
    });

    it('should be able to remove the first node from not empty list', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode(1))

        assert.equal(list.first.value, 1)
        assert.equal(list.count, 1)

        list.removeFirst()
        assert.equal(list.count, 0)
    });

    it('should be able to remove the last node from not empty list', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode(1))
        list.add(new DoublyLinkedListNode(2))

        list.removeLast()
        assert.equal(list.first.value, 2)
        assert.equal(list.count, 1)
    });

    it('should be able to remove all nodes from not empty list', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode(1))
        list.add(new DoublyLinkedListNode(2))

        list.removeFirst()
        list.removeFirst()

        assert.equal(list.count, 0)
    });

    it('should be able to clear all nodes', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode(1))
        list.add(new DoublyLinkedListNode(2))

        list.clear()
        assert.equal(list.count, 0)
    });

    it('should be able to find the node with the same number', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode(1))

        assert.isTrue(list.contains(new DoublyLinkedListNode(1)))
    });

    it('should be able to find the node with the same object', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode({"key": "value"}))

        assert.isTrue(list.contains(new DoublyLinkedListNode({"key": "value"})))
    });

    it('should be able to remove the node with the same object value', () => {

        let list = new DoublyLinkedList()
        list.add(new DoublyLinkedListNode({"key": "value"}))

        assert.equal(list.count, 1)
        list.remove(new DoublyLinkedListNode({"key": "value"}))
        assert.equal(list.count, 0)
    });

    it('should be able to iterate all the nodes within the list', () => {

        let list = new DoublyLinkedList()
        let v = 0
        v += 1
        list.add(new DoublyLinkedListNode(v))
        v += 1
        list.add(new DoublyLinkedListNode(v))


        for (let item of list.iterator()) {
            if (item !== undefined) {
                expect(item).to.equal(v)
                v -= 1
            }
        }
    });

    it('should be able to copy all the value of to a new array', () => {

        let list = new DoublyLinkedList()
        let v = 0
        v += 1
        list.add(new DoublyLinkedListNode(v))
        v += 1
        list.add(new DoublyLinkedListNode(v))

        let values = []
        list.copyTo(values,0)


        for (let item of values) {
            if (item !== undefined) {
                expect(item).to.equal(v)
                v -= 1
            }
        }

    });
})

