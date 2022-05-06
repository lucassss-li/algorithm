// 410. 分割数组的最大值

function splitArray(nums: number[], m: number): number {
    const n = nums.length
    let max = 0
    let sum = 0
    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i])
        sum = sum + nums[i]
    }
    let i = max - 1
    let j = sum + 1
    while (j - i > 1) {
        const mid = i + Math.floor((j - i) / 2)
        if (split(nums, mid) > m) {
            i = mid
        } else {
            j = mid
        }
    }
    return j
    function split(nums: number[], max: number): number {
        let ans = 0
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] > max) {
                sum = 0
                ans++
            }
            sum += nums[i]
        }
        return ans + 1
    }
}
