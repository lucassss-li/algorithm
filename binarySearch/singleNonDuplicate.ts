// 540. 有序数组中的单一元素

//二段性
function _singleNonDuplicate(nums: number[]): number {
    let low = 0,
        high = nums.length - 1
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low
        if (nums[mid] === nums[mid ^ 1]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return nums[low]
}

//异或
function singleNonDuplicate(nums: number[]): number {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i]
    }
    return res
}
