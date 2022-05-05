// 153. 寻找旋转排序数组中的最小值

function findMin(nums: number[]): number {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2)
        if (nums[mid] <= nums[r]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return nums[l]
}
