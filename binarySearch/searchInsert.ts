// 35. 搜索插入位置

function searchInsert(nums: number[], target: number): number {
    let l = -1
    let r = nums.length
    let mid = -1
    while (l < r) {
        mid = l + Math.floor((r - l) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return r
}

function _searchInsert(nums: number[], target: number): number {
    let l = -1
    let r = nums.length - 1
    let mid = -1
    while (l <= r) {
        mid = l + Math.floor((r - l) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return r + 1
}
