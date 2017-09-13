import deepEqual from 'deep-equal'

export const  Utils =  {

    /**
     * Compare parameters a and b
     * @param {*} a 
     * @param {*} b 
     * @return 0 if a = b,  1 if a > b or  -1 if a < b.
     * @throws Error if a and b are not the same data type 
     * as nubmer, string and object
     */
    compare: ( a, b ) => {

        if (deepEqual(a, b))
            return 0

        if ( (typeof(a) == 'number' && typeof(b) == 'number' )
            || ( typeof(a) == 'string' && typeof(b) == 'string' ) ){
           return (a > b ) ? 1 : (a < b ? -1 : 0)
        }

        // Date Time or object  comparison 
        if (a instanceof Object && b instanceof Object) {
            if( JSON.stringify(a) > JSON.stringify(b) ){
                return 1
            }
            else if ( JSON.stringify(a) > JSON.stringify(b) ){
                return -1
            }
            else 
                return 0
        }

        throw new Error("Can not compare")
    },

    swap: (items, left , right) => {
        let temp = items[left]
        items[left] = items[right]
        items[right] = temp
    }
}