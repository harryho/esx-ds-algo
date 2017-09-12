// import * as utils from 'utils/utils'

// export default{
export const BubbleSort ={
    sort:  (items)=>{
        let swapped = false 
        let temp = null

        do
        {
            swapped = false

            for (let i = 1; i < items.length; i++) {
                if (Utils.compare(items[i - 1], items[i]) > 0) {   
                    temp = items[i -1]
                    items[i - 1] = items[i]
                    items[i] = temp
                    swapped = true
                }
            }
        }
        while (swapped != false)
        
    }
}