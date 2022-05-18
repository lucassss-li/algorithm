// 665. 非递减数列

function checkPossibility(nums: number[]): boolean {
    let flag = false
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if (flag) {
                return false
            } else {
                flag = true
                if (i === 0 || nums[i - 1] <= nums[i + 1]) {
                    nums[i] = nums[i + 1]
                } else {
                    nums[i + 1] = nums[i]
                }
            }
        }
    }
    return true
}
