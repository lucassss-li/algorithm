// 75. 颜色分类

function sortColors(nums: number[]): void {
    let left = -1
    let right = nums.length
    let i = 0
    while (i < right) {
        if (nums[i] === 0) {
            swap(nums, i++, ++left)
        } else if (nums[i] === 2) {
            swap(nums, i, --right)
        } else {
            i++
        }
    }
    function swap(arr: number[], i: number, j: number) {
        if (i === j) return
        arr[i] = arr[i] ^ arr[j]
        arr[j] = arr[i] ^ arr[j]
        arr[i] = arr[i] ^ arr[j]
    }
}
