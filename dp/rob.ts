// 198. 打家劫舍

function rob(nums: number[]): number {
    const n = nums.length
    const dp: number[] = []
    for (let i = 0; i < n; i++) {
        const a = i - 2 >= 0 ? dp[i - 2] + nums[i] : nums[i]
        dp[i] = Math.max(a, i - 1 >= 0 ? dp[i - 1] : 0)
    }
    return dp[n - 1]
}
