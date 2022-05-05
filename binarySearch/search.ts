// 704. 二分查找

function search(nums: number[], target: number): number {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return -1
}