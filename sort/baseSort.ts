function baseSort(arr: number[]) {
    let max = Array.from(finMax(arr) + '').length
    let buckets = Array(10)
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }

    for (let i = 1; i <= max; i++) {
        for (let j = 0; j < arr.length; j++) {
            let index = Math.floor(
                (arr[j] % Math.pow(10, i)) / Math.pow(10, i - 1)
            )
            buckets[index].push(arr[j])
        }
        let index = 0
        for (let j = 0; j < buckets.length; j++) {
            while (buckets[j].length !== 0) {
                arr[index++] = buckets[j].shift()
            }
        }
    }

    function finMax(arr: number[]) {
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i]
        }
        return max
    }
}

export { baseSort }
