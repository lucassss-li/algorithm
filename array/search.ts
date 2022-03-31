// 81. 搜索旋转排序数组 II

function search(nums: number[], target: number): boolean {
    return process(nums, target, 0, nums.length - 1) !== -1
    function process(
        nums: number[],
        target: number,
        left: number,
        right: number
    ): number {
        if (left > right) return -1
        const mid = (left + right) >> 1
        if (nums[mid] === target) {
            return mid
        }
        while (nums[mid] === nums[left]) {
            left++
        }
        while (nums[mid] === nums[right]) {
            right--
        }
        if (left >= mid || mid >= right) {
            return process(nums, target, left, right)
        }
        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target < nums[mid]) {
                return binarySearch(nums, target, left, mid - 1)
            } else {
                return process(nums, target, mid + 1, right)
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                return binarySearch(nums, target, mid + 1, right)
            } else {
                return process(nums, target, left, mid - 1)
            }
        }
    }
    function binarySearch(
        nums: number[],
        target: number,
        left: number,
        right: number
    ): number {
        if (left > right) return -1
        const mid = (left + right) >> 1
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            return binarySearch(nums, target, left, mid - 1)
        } else {
            return binarySearch(nums, target, mid + 1, right)
        }
    }
}
