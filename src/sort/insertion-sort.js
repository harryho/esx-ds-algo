 export  const InsertionSort = {
        sort: ( items) =>
        {
            let sortedRangeEndIndex = 1;

            while (sortedRangeEndIndex < items.length)
            {
                
                if (Utils.compare(items[sortedRangeEndIndex], items[sortedRangeEndIndex - 1]) < 0)
                {
                    
                    // Find the index to insert the value from the beginning
                    let insertIndex = 0 
                    for ( let index = 0; index < items.length; index++){
                        if (Utils.compare(items[index], items[sortedRangeEndIndex]) > 0 ){
                            insertIndex = index
                            break
                        }
                    }

                    // Insert(items, insertIndex, sortedRangeEndIndex);
                    // Store the vale of index sortedRangeEndIndex to temp
                    let temp = items[sortedRangeEndIndex]
                    // Shift the value from left to right
                    for (let i = sortedRangeEndIndex ; i > insertIndex  ; i-- ) {
                        items[i] = items[i -1]
                    }

                    items[insertIndex] = temp
                    
                }
                sortedRangeEndIndex++;
            }
        }
    }