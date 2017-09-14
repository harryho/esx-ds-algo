export const HeapSort = {

    sort: (items) => {

        let len; 

        let buildMaxHeap=(items) => { 
            len = items.length;
            for (var i = Math.floor(len / 2); i >= 0; i--) {
                heapify(items, i)
            }
        }

        let  heapify=(items, i) => { 
            let left = 2 * i + 1
            let right = 2 * i + 2
            let largest = i

            if (left < len && items[left] > items[largest]) {
                largest = left
            }

            if (right < len && items[right] > items[largest]) {
                largest = right
            }

            if (largest != i) {
                Utils.swap(items, i, largest)
                heapify(items, largest)
            }
        }

        let _sort=(items) =>{

            buildMaxHeap(items)

            for (var i = items.length - 1; i > 0; i--) {
                Utils.swap(items, 0, i)
                len--;
                heapify(items, 0)
            }
        }

        _sort(items)
    }
}