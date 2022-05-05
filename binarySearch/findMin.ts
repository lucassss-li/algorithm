// 153. 寻找旋转排序数组中的最小值

function findMin(nums: number[]): number {
    let l = -1
    let r = nums.length
    while (r - l > 1) {
        const mid = l + Math.floor((r - l) / 2)
        if (nums[mid] <= nums[nums.length-1]) {
            r = mid
        } else {
            l = mid
        }
    }
    return nums[r]
}