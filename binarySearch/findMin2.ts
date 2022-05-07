// 154. 寻找旋转排序数组中的最小值 II

function findMin(nums: number[]): number {
    let i = -1
    let j = nums.length
    while (j - i > 1) {
        const mid = i + Math.floor((j - i) / 2)
        if (nums[mid] > nums[j - 1]) {
            i = mid
        } else if (nums[mid] < nums[j - 1]) {
            j = mid + 1
        } else {
            j--
        }
    }
    return nums[j]
}
