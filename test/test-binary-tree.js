'use strict'

const bundle = require('../dist/bundle')
const BinaryTree = bundle.BinaryTree
const BinaryTreeNode = bundle.BinaryTreeNode


require('mocha')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert


describe('BinaryTreeNode', () => {
    it('should be able to create a new binary tree node', () => {
        let node = new BinaryTreeNode()
        assert.isNotNull(node)
        assert.isUndefined(node.value)
        assert.isNull(node.left)
        assert.isNull(node.right)
        assert.isTrue(node.isLeaf())
    })

    it('should be able to create a new binary tree node with value', () => {
        let node = new BinaryTreeNode('value')
        assert.isNotNull(node)
        assert.isNotNull(node.value)
        assert.isNull(node.left)
        assert.isNull(node.right)

    })

    it('should be able to set left and right node', () => {
        let node = new BinaryTreeNode(1)
        node.left = new BinaryTreeNode(2)
        node.right = new BinaryTreeNode(3)
        assert.isNotNull(node)
        assert.equal(node.value, 1)
        assert.equal(node.left.value, 2)
        assert.equal(node.right.value, 3)        

    })


    it('should be able to compare the number value', () => {
        let node = new BinaryTreeNode(1)

        assert.isNotNull(node)
        assert.equal(node.value, 1)
        assert.isFalse(node.compareTo(2) > 0)
        assert.isTrue(node.compareTo(0) > 0 )
        assert.isTrue(node.compareTo(1) == 0 )
    })

    it('should be able to compare character value', () => {
        let node = new BinaryTreeNode('b')

        assert.isNotNull(node)
        assert.equal(node.value, 'b')
        assert.isFalse(node.compareTo('c') > 0)
        assert.isTrue(node.compareTo('a') > 0 )
        assert.isTrue(node.compareTo('b') == 0 )
    })

})

describe('BinaryTree', () => {
    it('should be able to create a new binary tree', () => {
        let tree = new BinaryTree()
        assert.isNotNull(tree)
        assert.equal(tree.count, 0)

    })

    it('should be able to add root node to the tree', () => {
        let tree = new BinaryTree()
        tree.add(1)

        assert.isNotNull(tree)
        assert.equal(tree.count, 1)
    })

    it('should be able to add new node to the root', () => {
        let tree = new BinaryTree()
        tree.add(1)
        tree.add(2)

        assert.isNotNull(tree)
        assert.equal(tree.count, 2)

    })

    it('should be able to add new node to the root', () => {
        let tree = new BinaryTree()
        tree.add(1)
        tree.add(2)

        assert.isNotNull(tree)
        assert.equal(tree.count, 2)
    })


    it('should be able to traverse the tree as in-order', () => {
        let tree = new BinaryTree()
        let values  = [4,2,3,5,7,6,8,9,1]
        let i = 1
        values.forEach( (e) => tree.add(e))
 
        assert.isNotNull(tree)
        assert.equal(tree.count, 9)

        let stack = []
        tree.inOrderTraversal((v)=>stack.push(v) )
        assert.deepEqual(stack, [ 1, 2, 3, 4, 5, 6, 7, 8, 9])

        for( let value of tree.iterator())
        {
            assert.equal(value, i++)
        }
    })


    it('should be able to traverse the tree as pre-order', () => {
        let tree = new BinaryTree()
        let values  = [4,2,3,5,7,6,8,9,1]
        let i = 1
        values.forEach( (e) => tree.add(e))
 
        assert.isNotNull(tree)
        assert.equal(tree.count, 9)

        let stack = []

        tree.preOrderTraversal((v)=>stack.push(v) )
        assert.deepEqual(stack, [4, 2, 1, 3, 5, 7, 6, 8, 9])
        
    })

    it('should be able to traverse the tree as post-order', () => {
        let tree = new BinaryTree()
        let values  = [4,2,3,5,7,6,8,9,1]
        let i = 1
        values.forEach( (e) => tree.add(e))
 
        assert.isNotNull(tree)
        assert.equal(tree.count, 9)

        let stack = []

        tree.postOrderTraversal((v)=>stack.push(v) )
        assert.deepEqual(stack, [1, 3, 2, 6, 9, 8, 7, 5, 4])       
       
    })

    it('should be able to sort characters in order', () => {
        let tree = new BinaryTree()
        let str  = 'bcdesagh'
        let strArray = str.split('')
        let i = 1
        strArray.forEach( (e) => tree.add(e))

        let stack = []

        tree.inOrderTraversal((v)=>stack.push(v) )
        assert.equal(stack.join(''), 'abcdeghs')  
    })


    it('should be able to sort characters in order after remove some characters', () => {
        let tree = new BinaryTree()
        let str  = 'dcebsaghfdyl'
        let strArray = str.split('')
        let i = 1
        strArray.forEach( (e) => tree.add(e))

        tree.remove('f')
        tree.remove('l')
        let stack = []

        tree.inOrderTraversal((v)=>stack.push(v) )
        assert.equal(stack.join(''), 'abcddeghsy')  
    })

})