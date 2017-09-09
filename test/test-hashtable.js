'use strict'

const bundle = require('../dist/bundle')
const HashTable = bundle.HashTable
const HashTablePair = bundle.HashTablePair


require('mocha')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert


describe('HashTablePair', () => {
    it('should be able to create a new hashtable pair object', () => {
        let pair = new HashTablePair()
        assert.isNotNull(pair)
        assert.isUndefined(pair.key)
        assert.isUndefined(pair.value)
    })

    it('should be able to create a new hashtable pair with key-value', () => {
        let pair = new HashTablePair('key', 'value')
        assert.isNotNull(pair)
        assert.equal(pair.key, 'key')
        assert.equal(pair.value, 'value')

        pair = new HashTablePair(1, 2)
        assert.isNotNull(pair)
        assert.equal(pair.key, 1)
        assert.equal(pair.value, 2)
    })

})

describe('HashTable', () => {
    it('should be able to create a new hashtable', () => {
        let hashTable = new HashTable()
        assert.isNotNull(hashTable)
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 100)
    })

    it('should be able to a new hashtable with capacity', () => {
        let hashTable = new HashTable(10)
        assert.isNotNull(hashTable)
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 10)

        hashTable = new HashTable(null)
        assert.isNotNull(hashTable)
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 100)
    })

    it('should throw error to new a hashtable with incorrect capacity', () => {
        expect(()=>new HashTable(-10)).to.throw(Error, "Initial capacity is incorrect.")
    })

    it('should be able to add key-value pair to a hashtable', () => {
        let hashTable = new HashTable()
        hashTable.add('abc', 123)
        
        assert.equal(hashTable.count, 1)
    })

     it('should throw error to add the same key of key-value to the hashtable', () => {
        let hashTable = new HashTable(10)
        hashTable.add('abc', 123)
        expect(()=>hashTable.add('abc', 321)).to.throw(Error, "The collection already contains the key")
    })

    it('should be able to get existing values by key', () => {
        let hashTable = new HashTable()
        hashTable.add('abc', 123)
        hashTable.add('array', [1,2,3])

        let v1 = hashTable.getValue('abc')
        let v2 = hashTable.getValue('array')
        assert.equal(v1, 123)
        assert.deepEqual(v2, [1,2,3])
    })

    it('should be able to remove existing values by key', () => {
        let hashTable = new HashTable()
        hashTable.add('abc', 123)

        assert.equal(hashTable.count, 1)
        assert.equal(hashTable.remove('abc'), 123)
        assert.equal(hashTable.count, 0)

    })

    it('should be able to update existing key-value by key', () => {
        let hashTable = new HashTable()
        hashTable.add('abc', 123)
        hashTable.add('array', [1,2,3])

        assert.equal(hashTable.getValue('abc'), 123)
        assert.deepEqual(hashTable.getValue('array'), [1,2,3])

        expect(hashTable.update('abc', '000')).to.be.true
        expect(hashTable.update('array', [4,5,6])).to.be.true

        assert.equal(hashTable.getValue('abc'), '000')
        assert.deepEqual(hashTable.getValue('array'),[4,5,6])
    })

    it('should throw Error to update non-existing key-value', () => {
        let hashTable = new HashTable()
        hashTable.add('abc', 123)

        assert.equal(hashTable.getValue('abc'), 123)

        expect(()=> hashTable.update('not-exist', '000')).to.throw(Error, "The collection does not contain the key")
  
    })

    it('should be able to resize the capacity manually', () => {
        let hashTable = new HashTable(10)
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 10)

        hashTable.add('abc', 123)
        hashTable.add('123', 123)
        hashTable.add('ddd', 123)
        hashTable.add('000', 123)
        hashTable.add('qqq', 123)

        assert.equal(hashTable.count, 5)
        assert.equal(hashTable.capacity, 10)

        hashTable.resize(20)
        assert.equal(hashTable.count, 5)
        assert.equal(hashTable.capacity, 20)
    })


    it('should be able to automatically resize the capacity after add many key-value', () => {
        let hashTable = new HashTable(2)
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 2)

        hashTable.add('abc', 123)
        hashTable.add('123', 123)
        hashTable.add('ddd', 123)
        hashTable.add('000', 123)
        hashTable.add('qqq', 123)

        assert.equal(hashTable.count, 5)
        assert.equal(hashTable.capacity, 8)
    })

    it('should be able to automatically resize the capacity after remove many key-value', () => {
        let hashTable = new HashTable()
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 100)

        hashTable.add('abc', 123)
        hashTable.add('123', 123)
        hashTable.add('000', 123)
        

        assert.equal(hashTable.count, 3)
        assert.equal(hashTable.capacity, 100)

        hashTable.remove('abc')
        assert.equal(hashTable.count, 2)
        assert.equal(hashTable.capacity, 50)

    })

    it('should be able to clear all key-value items', () => {
        let hashTable = new HashTable()
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 100)

        hashTable.add('abc', 123)
        hashTable.add('123', 123)
        hashTable.add('000', 123)
        

        assert.equal(hashTable.count, 3)
        assert.equal(hashTable.capacity, 100)

        hashTable.clear('abc')
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 100)
    })

    it('should be able to return all keys', () => {
        let hashTable = new HashTable(10)
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 10)

        let _keys = ['abc', '123', '000']

        _keys.forEach((k) => {
            hashTable.add(k, 123)    
        })
        
        assert.equal(hashTable.count, 3)
        assert.equal(hashTable.capacity, 10)
        for ( let key of hashTable.keys){            
            assert.isTrue( _keys.indexOf(key) >=0 )
        }            
    }) 

    it('should be able to return all values', () => {
        let hashTable = new HashTable(10)
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 10)

        let _keys = ['abc', '123', '000']
        let _values = ['xxx', 'yyy', 'zzz']
        let i = 0

        _keys.forEach((k) => {
            hashTable.add(k, _values[i++])    
        })
        
        assert.equal(hashTable.count, 3)
        assert.equal(hashTable.capacity, 10)
        for ( let value of hashTable.values){          
            assert.isTrue( _values.indexOf(value) >=0 )
        }            
    })


    it('should be able to iterate all items', () => {
        let hashTable = new HashTable(10)
        assert.equal(hashTable.count, 0)
        assert.equal(hashTable.capacity, 10)

        let _keys = ['abc', '123', '000']
        let _values = ['xxx', 'yyy', 'zzz']
        let i = 0

        _keys.forEach((k) => {
            hashTable.add(k, _values[i++])    
        })
        
        assert.equal(hashTable.count, 3)
        assert.equal(hashTable.capacity, 10)
        for ( let pair of hashTable.iterator()){                      
            assert.isTrue(pair.value === _values[_keys.indexOf(pair.key)] )
        }            
    })


    
})

