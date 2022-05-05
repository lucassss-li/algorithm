// 34. 在排序数组中查找元素的第一个和最后一个位置

function searchRange(nums: number[], target: number): number[] {
    function searchBorder(
        nums: number[],
        target: number,
        flag: boolean
    ): number {
        let i = -1
        let j = nums.length
        while (j - i > 1) {
            const mid = i + Math.floor((j - i) / 2)
            if (flag ? nums[mid] >= target : nums[mid] > target) {
                j = mid
            } else {
                i = mid
            }
        }
        return flag ? j : i
    }
    const i = searchBorder(nums, target, true)
    const j = searchBorder(nums, target, false)
    return i <= j ? [i, j] : [-1, -1]
}
