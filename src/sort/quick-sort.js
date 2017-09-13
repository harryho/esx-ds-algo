export const QuickSort =
{
        sort: ( items) =>
        {
            let _randomIndex = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            let _sort = ( items,  left,  right) =>
            {
                if (left < right)
                {
                    let pivotIndex = _randomIndex(left, right) 
                    let newPivot = partition(items, left, right, pivotIndex)

                    _sort(items, left, newPivot - 1)
                    _sort(items, newPivot + 1, right)
                }
            }

            let partition = ( items,  left,  right,  pivotIndex) =>
            {
                let pivotValue = items[pivotIndex];
               
                Utils.swap(items,  pivotIndex, right)

                let storeIndex = left

                for (let i = left; i < right; i++)
                {
                    console.log( ' i items[i] ', i, ' ',items[i], ' pivotValue ', pivotValue)
                    if (Utils.compare(items[i], pivotValue) < 0)
                    {
                        if ( i !== storeIndex ){
                            Utils.swap(items, i, storeIndex)
                         }  
                        storeIndex += 1
                    }
                }
                
                Utils.swap(items, storeIndex, right)
                return storeIndex
            }
      
            _sort(items, 0, items.length- 1)
        }        
}