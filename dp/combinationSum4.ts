// 377. 组合总和 Ⅳ

function combinationSum4(nums: number[], target: number): number {
    const n = nums.length
    const dp = Array(target + 1).fill(0)
    for (let i = 0; i < n; i++) {
        nums[i] <= target && (dp[nums[i]] = 1)
    }
    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < n; j++) {
            if (i >= nums[j]) dp[i] += dp[i - nums[j]]
        }
    }
    return dp[target]
}
