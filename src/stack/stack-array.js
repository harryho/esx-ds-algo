/**
 * StackList is implemented with array
 */
export class StackArray
{

    constructor() {
        this._items = [];
    }

    push(item)
    {
        this._items[this._items.length] = item;
    }

    pop()
    {
        if (this._items.length == 0) {
            throw new Error("The stack is empty");
        }
        return this._items.pop();
    }

    peek()
    {
        if (this._items.length == 0) {
            throw new Error("The stack is empty");
        }

        return this._items[this._items.length - 1];
    }

    get count()
    {
        return this._items.length
    }

    clear()
    {
        this._items = []
    }

    * _iterator()
    {
        for (let i = this._items.length - 1; i >= 0; i--) {
            yield this._items[i];
        }
    }

     iterator()
    {
        return this._iterator();
    }

}
