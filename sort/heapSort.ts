function heapSort(arr: number[]) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, arr.length, i)
    }
    swap(arr, 0, arr.length - 1)
    for (let i = arr.length - 1; i > 0; i--) {
        heapify(arr, i, 0)
        swap(arr, 0, i - 1)
    }
    function heapify(arr: number[], n: number, i: number) {
        let left = 2 * i + 1
        let right = 2 * i + 2
        if (left < n && arr[i] < arr[left]) {
            swap(arr, i, left)
            heapify(arr, n, left)
        }
        if (right < n && arr[i] < arr[right]) {
            swap(arr, i, right)
            heapify(arr, n, right)
        }
    }
    function swap(arr: number[], i: number, j: number) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

export { heapSort }
