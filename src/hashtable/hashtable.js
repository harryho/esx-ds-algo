export class HashTablePair {
    constructor(key, value) {
        this._key = key
        this._value = value
    }
    get key() {
        return this._key
    }
    get value() {
        return this._value
    }
}

export class HashTable {
    /**
     * @constructor
     * @param {*} capacity default 100
     * 
     * Structure of this hashtable : this._array
     * 
     * [ 
     *  [ [k,v], [k,v], [k,v] ] , 
     *  [ [k,v], [k,v] ],
     *  [ [k,v] ] 
     * ]
     */
    constructor(capacity = 100) {

        if (capacity && capacity < 1) {
            throw new Error("Initial capacity is incorrect.");
        }

        this._array = [];
        this._fillFactor = 0.75
        this._count = 0;
        this._capacity = capacity || 100;
        // The maximum number of items to store before growing
        this._maxCurrentSize = parseInt(capacity * this._fillFactor) +  1 
        // The minimum number of items to store before shrinking
        this._minCurrentSize = parseInt(capacity * (1 - this._fillFactor)) + 1 
    }

    get capacity() {return this._capacity}
    get count() {return this._count}


    add(key, value) {
        // Create an index by passing it through our hashing function
        let index = this.hashCode(key);

        let list = this._array[index]

        if (!list) {
            //create the list
            list = []
            //insert the list into our hashTable
            this._array[index] = list;
        }

        if (list.length > 0 && list.indexOf(key) >= 0) {
            throw new Error("The collection already contains the key")
        } else {

            list.push(new HashTablePair(key, value))
            this._count++;

            if (this._count > this._maxCurrentSize) {
                this.resize(this._capacity * 2)
            }
        }
    }


    update(key, value) {

        if (this._count === 0)
            throw new Error("The collection is empty")

        let updated = false
        // Get an index by key
        let index = this.hashCode(key)

        let list = this._array[index]

        if (!list) {
            throw new Error("The collection does not contain the key")
        }
        else 
        {
            let n = -1
            for(let i = 0 ; i < list.length; i++ ){
                if (list[i].key === key ){
                    n = i; break;
                }
            }
            if ( n < 0 )
                throw new Error("The collection does not contain the key")
            else {
                list[n] = new HashTablePair(key,value)
                updated = true                
            }

        }

        return updated
    }

    remove(key) {
        let index = this.hashCode(key, this._capacity);
        let list = this._array[index];
        if (!list || list.length <= 0) {
            return false;
        }
        //iterate over the list
        for (let i = 0; i < list.length; i++) {
            let pair = list[i];
            //check to see if key is inside list
            if (pair.key === key) {
                //if it is, get rid of this pair
                list.splice(i, 1);
                this._count--;
                if (this._count < this._minCurrentSize) {
                    this.resize(this._capacity / 2<2 ? 2:parseInt(this._capacity / 2))
                }
                return pair.value;
            }
        }
    };

    getValue(key) {
        let index = this.hashCode(key, this._capacity);
        let list = this._array[index];

        if (!list || list.length <= 0) {
            return null;
        }

        for (let pair of list) {
            if (pair.key === key) {
                return pair.value
            }
        }

        return null;
    };



    hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            let letter = str[i];
            hash = (hash << 5) + letter.charCodeAt(0);
            hash = (hash & hash) % this._capacity;
        }
        return hash;
    }

    resize(newCapacity) {
        let oldArray = this._array;

        this._capacity = newCapacity;
        // this._count = 0;
        this._array = oldArray.slice()
        this._maxCurrentSize = parseInt(this._capacity * this._fillFactor) + 1
        this._minCurrentSize = parseInt(this._capacity * (1 - this._fillFactor)) + 1

    }

    * _keys () {
        for ( let list of this._array ){

            if (list){
               for ( let pair of list ){
                   console.log(pair)
                   yield pair.key
               } 
            }
        }
    }

    get keys() {
        return this._keys()
    }

    * _values () {
        for ( let list of this._array ){
            if (list){
               for ( let pair of list ){
                   yield pair.value
               } 
            }
        }
    }

    get values() {
        return this._values()
    }

    * _iterator () {
        for ( let list of this._array ){
            if (list){
               for ( let pair of list ){
                   yield pair
               } 
            }
        }
    }

    iterator(){
        return this._iterator()
    }

    clear() {
        this._array = [];
        this._fillFactor = 0.75
        this._count = 0;
        this._capacity = 100;
        this._maxCurrentSize = parseInt(this._capacity * this._fillFactor) + 1
        this._minCurrentSize = parseInt(this._capacity * (1 - this._fillFactor)) + 1
    }

}