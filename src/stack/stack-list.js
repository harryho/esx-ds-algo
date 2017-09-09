/**
 * StackList is implemented with DoublyLinkedList
 */
export class StackList
{
    constructor() {
        this._list = new DoublyLinkedList()
    }

    push(item)
    {
        this._list.addFirst(new DoublyLinkedListNode(item))
    }

    pop()
    {
        if (this._list.count == 0) {
            throw new Error("The stack is empty")
        }

        let value = this._list.first.value;
        this._list.removeFirst()

        return value;
    }

    peek()
    {
        if (this._list.count == 0) {
            throw new Error("The stack is empty")
        }

        return this._list.first.value;
    }

    get count()
    {
        return this._list.count
    }

    clear()
    {
        this._list.clear()
    }

    iterator()
    {
        return this._list.iterator()
    }

}