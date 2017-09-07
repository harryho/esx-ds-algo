export class LinkedListNode {

   /**
    * @constructor
    * @param {LinkedListNode} value 
    */
    constructor(value) {
        this._value = value;
    }
    
    get value() { return this._value; }
    set value(value) { this._value = value; }

    get next() { return this._next; }
    set next(node) { this._next = node; }
}