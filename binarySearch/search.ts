// 704. 二分查找

function search(nums: number[], target: number): number {
    let l = -1
    let r = nums.length
    while (r - l > 1) {
        const mid = l + Math.floor((r - l) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            r = mid
        } else {
            l = mid
        }
    }
    return -1
}
