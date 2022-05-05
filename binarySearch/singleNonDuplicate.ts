// 540. 有序数组中的单一元素

//二段性
function _singleNonDuplicate(nums: number[]): number {
    let i = -1
    let j = nums.length - 1
    while (j - i > 2) {
        const mid = Math.floor((j - i) / 2) + i
        if (mid & 1) {
            if (nums[mid] === nums[mid - 1]) {
                i = mid
            } else if (nums[mid] === nums[mid + 1]) {
                j = mid
            } else { 
                return nums[mid]
            }
        } else {
            if (nums[mid] === nums[mid + 1]) {
                i = mid + 1
            } else if (nums[mid] === nums[mid - 1]) {
                j = mid - 1
            } else { 
                return nums[mid]
            }
        }
    }
    return nums[i + 1]
}

//异或
function singleNonDuplicate(nums: number[]): number {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i]
    }
    return res
}

const res = _singleNonDuplicate([3,3,7,7,10,11,11])
console.log(res);
