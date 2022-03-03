function mergeSort(source: number[]) {
    let temp: number[] = []
    sort(source, 0, source.length - 1, temp)
    function sort(
        source: number[],
        left: number,
        right: number,
        temp: number[]
    ) {
        if (left < right) {
            let mid = Math.floor((left + right) / 2)
            sort(source, left, mid, temp)
            sort(source, mid + 1, right, temp)
            merge(source, left, mid, right, temp)
        }
    }
    function merge(
        source: number[],
        left: number,
        mid: number,
        right: number,
        temp: number[]
    ) {
        let i = left
        let j = mid + 1
        let t = 0
        while (i <= mid && j <= right) {
            if (source[i] <= source[j]) {
                temp[t++] = source[i++]
            } else {
                temp[t++] = source[j++]
            }
        }
        while (i <= mid) {
            temp[t++] = source[i++]
        }
        while (j <= right) {
            temp[t++] = source[j++]
        }
        t = 0
        while (left <= right) {
            source[left++] = temp[t++]
        }
    }
}

export { mergeSort }
