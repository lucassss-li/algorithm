// 34. 在排序数组中查找元素的第一个和最后一个位置

function searchRange(nums: number[], target: number): number[] {
    function getBorder(nums: number[], target: number, flag: boolean): number {
        let l = 0
        let r = nums.length - 1
        let mid = -1
        while (l <= r) {
            mid = l + Math.floor((r - l) / 2)
            if (flag ? nums[mid] < target : nums[mid] <= target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return flag ? r + 1 : l - 1
    }
    const l = getBorder(nums, target, true)
    const r = getBorder(nums, target, false)
    return l <= r ? [l, r] : [-1, -1]
}
