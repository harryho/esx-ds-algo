export  const MergeSort = 
    {
        sort: ( items)=>
        {

            let merge = ( items, left, right)=> {
                let leftIndex = 0;
                let rightIndex = 0;
                let targetIndex = 0;

                let remaining = left.length + right.length;

                while(remaining > 0)
                {
                    if (leftIndex >= left.length)
                    {
                        items[targetIndex] = right[rightIndex++]
                    }
                    else if (rightIndex >= right.length)
                    {
                        items[targetIndex] = left[leftIndex++]
                    }
                    else if (Utils.compare(left[leftIndex], right[rightIndex]) < 0)                            
                    {
                        items[targetIndex] = left[leftIndex++]
                    }
                    else
                    {
                        items[targetIndex] = right[rightIndex++]
                    }

                    targetIndex++;
                    remaining--;
                }
            }

            let _sort = (items)=> {
            
                if (items.length <= 1)
                {
                    return;
                }

                let leftSize = items.length / 2
                let rightSize = items.length - leftSize

                let left = items.slice(0, leftSize)
                let right = items.slice(rightSize, items.length)

                _sort(left)
                _sort(right)

                merge(items, left, right)
            }

            _sort(items)
        }

        
    }