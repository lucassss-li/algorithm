function quickSort1(arr: number[]) {
    sort(arr, 0, arr.length - 1)
    function sort(arr: number[], left: number, right: number) {
        if (left >= right) return
        let i = left + 1
        let j = right
        while (i < j) {
            while (arr[i] < arr[left] && i + 1 <= right) {
                i++
            }
            while (arr[left] <= arr[j] && j - 1 > left) {
                j--
            }
            if (i >= j) break
            swap(arr, i, j)
        }
        if (arr[left] > arr[j]) {
            swap(arr, left, j)
        }
        sort(arr, left, j - 1)
        sort(arr, i, right)
    }
    function swap(arr: number[], i: number, j: number) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

function quickSort2(arr: number[]) {
    function swap(arr: number[], i: number, j: number) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    sort(0, arr.length - 1)
    function sort(i: number, j: number) {
        if (i >= j) return
        let target = arr[j]
        let left = i - 1
        let right = j + 1
        let index = i
        while (index < right) {
            if (arr[index] === target) {
                index += 1
            } else if (arr[index] > target) {
                swap(arr, index, right - 1)
                right -= 1
            } else {
                swap(arr, index, left + 1)
                left += 1
                index += 1
            }
        }
        sort(i, left)
        sort(right, j)
    }
}

export { quickSort1 }
