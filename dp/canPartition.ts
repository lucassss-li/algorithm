// 416. 分割等和子集
function canPartition(nums: number[]): boolean {
    const n = nums.length
    const sum = nums.reduce((total, num) => total + num, 0)
    if (sum & 1) return false
    const target = sum / 2
    const dp: boolean[][] = Array(n)
        .fill(0)
        .map(() => Array(target + 1).fill(false))
    dp[0][0] = true
    dp[0][nums[0]] = true
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < target + 1; j++) {
            if (j === 0) {
                dp[i][j] = true
                continue
            }
            dp[i][j] =
                dp[i - 1][j] ||
                (j - nums[i] >= 0 ? dp[i - 1][j - nums[i]] : false)
        }
    }
    return dp[n - 1][target]
}
