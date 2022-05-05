// 162. 寻找峰值

function findPeakElement(nums: number[]): number {
    let i = -1
    let j = nums.length
    while (j - i > 1) {
        const mid = i + Math.floor((j - i) / 2)
        if (nums[mid] > (mid + 1 < nums.length ? nums[mid + 1] : -Infinity)) {
            j = mid
        } else {
            i = mid
        }
    }
    return i
}