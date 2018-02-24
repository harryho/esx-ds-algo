export const CountingSort = {
    
    sort:(items, maxValue) => {
        var bucket = new Array(maxValue+1),
            sortedIndex = 0;
            arrLen = items.length,
            bucketLen = maxValue + 1;

        for (var i = 0; i < arrLen; i++) {
            if (!bucket[items[i]]) {
                bucket[items[i]] = 0;
            }
            bucket[items[i]]++;
        }

        for (var j = 0; j < bucketLen; j++) {
            while(bucket[j] > 0) {
                items[sortedIndex++] = j;
                bucket[j]--;
            }
        }

        return items;
    }
}