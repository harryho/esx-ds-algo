import deepEqual from 'deep-equal'

export class BinaryTreeNode
{
    constructor(value)
    {
        this._value = value
        this._left = null

        this._right = null
    }

    get left() {
        return this._left
    }

    set left(node) {
        return this._left = node
    }

    get right() {
        return this._right
    }
    set right(node) {
        return this._right = node
    }

    get value() {
        return this._value
    }


    /**
     * Return 1 if the instance value is greater than 
     * the provided value, -1 if less or 0 if equal.
     * @param {*} otherValue 
     */
    compareTo(otherValue)
    {
        return Utils.compare(this._value, otherValue)           
    }

    isLeaf() {
        return !this._left && !this._right
    }

}