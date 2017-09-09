// import {LinkedListNode} from './linked-list-node'

export class LinkedList {

    /**
    * @constructor
    */
    constructor() {
        this._first = null;
        this._last = null;
        this._count = 0;
    }

    get first() {
        return this._first;
    }

    get last() {
        return this._last
    }

    addFirst(node)
    {
        // Save off the first node so we don't lose it
        let temp = this.first;

        // Point first to the new node
        this._first = node;

        // Insert the rest of the list behind the first
        this.first.next = temp;

        this._count++;

        if (this._count == 1) {
            // if the list was empty then first and last should both point to the new node.
            this._last = this.first;
        }
    }

    addLast(node)
    {
        if (this._count == 0) {
            this._first = node;
        } else {
            this.last.next = node;
        }

        this._last = node;

        this._count++;
    }

    removeFirst()
    {
        if (this._count != 0) {
            // Before: First -> 1 -> 2 
            // After:  First ------> 2 
            this._first = this.first.next;
            this._count--;

            if (this._count == 0) {
                this._last = null;
            }
        }
    }

    removeLast()
    {
        if (this._count != 0) {
            if (this._count == 1) {
                this._first = null;
                this._last = null;
            } else {
                // Before: First --> 1 --> 2 --> 3  last = 3 
                // After:  First --> 1 --> 2 --> null  last = 2
                let current = this.first;
                while (current.next != this.last) {
                    current = current.next;
                }

                current.next = null;
                this._last = current;
            }

            this._count--;
        }
    }

    get count() {
        return this._count
    }

    /**
     * Add an item or a LinkedListNode to the list
     * @param {*} item 
     */
    add(item)
    {
        item = item instanceof LinkedListNode? item: new LinkedListNode(item)
        this.addFirst(item);
    }

    /**
     * Check an item or a LinkedListNode exists or not
     * @param {*} item 
     */
    contains(item)
    {
        let current = this.first;
        item = item instanceof LinkedListNode? item: new LinkedListNode(item)

        while (current != null) {
            if (JSON.stringify(current.value) === JSON.stringify(item.value)) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    copyTo(array, arrayIndex)
    {
        let current = this.first;
        while (current != null) {
            array[arrayIndex++] = current.value;
            current = current.next;
        }
    }

    /**
     * Remove an item or a LinkedListNode from the list
     * @param {*} item 
     */
    remove(item)
    {
        let previous = null;
        let current = this.first;
        item = item instanceof LinkedListNode? item: new LinkedListNode(item)

        while (current != null) {
            if (JSON.stringify(current.value) === JSON.stringify(item.value)) {
                // it's a node in the middle or end
                if (previous != null) {
                    // Before: First -> 1 -> 2 -> null 
                    // After:  First -> 1 ------> null
                    previous.next = current.next;

                    // it was the end - so update last
                    if (current.next == null) {
                        this._last = previous;
                    }
                    this._count--;
                } else {
                    this.removeFirst();
                }

                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    } 
    
    
    * _iterator()
    {
        let current = this.first;

        while (current != null) {
            yield current.value
            current = current.next
        }

    }

    iterator()
    {
        return this._iterator()
    }

    clear()
    {
        this._first = null;
        this._last = null;
        this._count = 0;
    }

}
