// import {LinkedListNode} from './linked-list-node'

export class DoublyLinkedList {

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
    set first(first) {
        this._first = first;
    }

    get last() {
        return this._last
    }
    set last(last) {
        this._last = last
    }

    addFirst(node)
    {
        // Save off the first node so we don't lose it
        let temp = this.first;

        // Point first to the new node
        this.first = node;

        // Insert the rest of the list behind the first
        this.first.next = temp;

        this._count++;

        if (this._count == 1) {
            // if the list was empty then first and last should both point to the new node.
            this.last = this.first;
        } else {
            // Before: First -------> 2 <-> 3 -> null 
            // After:  First -> 1 <-> 2 <-> 3 -> null
            // temp.previous was null, now First
            temp.previous = this.first;
        }
    }

    addLast(node)
    {
        if (this._count == 0) {
            this.first = node;
        } else {
            this.last.next = node;
            // Before: First -> 1 <-> 2 -> null
            // After:  First -> 1 <-> 2 <-> 3 -> null 3.previous = 2
            node.previous = this.last
        }

        this.last = node;

        this._count++;
    }

    removeFirst()
    {
        if (this._count != 0) {
            // Before: First -> 1 -> 2 
            // After:  First ------> 2 
            this.first = this.first.next;
            this._count--;

            if (this._count == 0) {
                this.last = null;
            }
            else {
                // 2.previous was 1, now null
                this.first.previous = null;
            }
        }
    }

    removeLast()
    {
        if (this._count != 0) {
            if (this._count == 1) {
                this.first = null;
                this.last = null;
            } else {
                // Before: First --> 1 --> 2 --> 3   Last = 3
                // After:  First --> 1 --> 2 --> null  Last = 2
                // Null out 2's Next pointer
                this.last.previous.next = null;
                this.last = this.last.previous
            }
            this._count--;
        }
    }

    get count() {
        return this._count
    }

    add(item)
    {
        this.addFirst(item);
    }

    contains(item)
    {
        let current = this.first;
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

    remove(item)
    {
        let previous = null;
        let current = this.first;

        while (current != null) {
            if (JSON.stringify(current.value) === JSON.stringify(item.value)) {
                // it's a node in the middle or end
                if (previous != null) {
                    // Before: First -> 1 -> 2 -> null 
                    // After:  First -> 1 ------> null
                    previous.next = current.next;

                    // it was the end - so update last
                    if (current.next == null) {
                        this.last = previous;
                    }
                    else{
                        // Before: First -> 1 <-> 2 <-> 3 -> null
                        // After:  First -> 2 <-------> 3 -> null
                        current.next.previous = previous;
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
