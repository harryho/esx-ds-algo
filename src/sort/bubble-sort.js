export const BubbleSort ={
    sort:  (items)=>{
        let swapped = false 
        let temp = null

        do
        {
            swapped = false

            for (let i = 1; i < items.length; i++) {
                if (Utils.compare(items[i - 1], items[i]) > 0) {   
                    Utils.swap(items, i-1, i )
                    swapped = true
                }
            }
        }
        while (swapped != false)

    }
}
