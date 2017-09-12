export const SelectionSort =
    {
        sort( items)
        {
            let sortedRangeEnd = 0
            let temp = null

            while (sortedRangeEnd < items.length)
            {
                let currentIndex = sortedRangeEnd
                let smallest = items[sortedRangeEnd]
                let smallestIndex = sortedRangeEnd

                // Find the smallest value and its index
                for (let i = sortedRangeEnd + 1; i < items.length; i++)
                {
                    if (Utils.compare(smallest, items[i]) > 0)
                    {
                        smallest = items[i];
                        smallestIndex = i;
                    }
                }

                // Swap the values if current index is not the smallest index
                if ( currentIndex !==  smallestIndex) {
                    temp = items[currentIndex]
                    items[currentIndex] = items[smallestIndex]
                    items[smallestIndex] = temp
                }
                
                sortedRangeEnd++;
            }
        }

       
    }