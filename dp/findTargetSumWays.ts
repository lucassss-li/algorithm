// 494. 目标和
function findTargetSumWays(nums: number[], target: number): number {
    const n = nums.length
    const sum = nums.reduce((total, num) => total + num, 0)
    const dp = Array(n)
        .fill(0)
        .map(() => new Map())
    for (let j = -sum; j <= sum; j++) {
        dp[0].set(j, 0)
    }
    dp[0].set(nums[0], 1)
    if (nums[0] === 0) {
        dp[0].set(-nums[0], 2)
    } else {
        dp[0].set(-nums[0], 1)
    }
    for (let i = 1; i < n; i++) {
        for (let j = -sum; j <= sum; j++) {
            const s =
                (dp[i - 1].has(j + nums[i]) ? dp[i - 1].get(j + nums[i]) : 0) +
                (dp[i - 1].has(j - nums[i]) ? dp[i - 1].get(j - nums[i]) : 0)
            dp[i].set(j, s)
        }
    }
    return dp[n - 1].has(target) ? dp[n - 1].get(target) : 0
}
