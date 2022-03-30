// 80. 删除有序数组中的重复项 II

function removeDuplicates(nums: number[]): number {
    const n = nums.length
    if (n <= 2) return n
    let i = 2
    let j = 1
    while (i < n) {
        if ((nums[i] !== nums[j] || nums[i] !== nums[j - 1]) && i - j > 1) {
            nums[++j] = nums[i++]
            continue
        }
        if (nums[i] !== nums[j] || nums[i] !== nums[j - 1]) {
            i++
            j++
        } else {
            i++
        }
    }
    return j + 1
}
