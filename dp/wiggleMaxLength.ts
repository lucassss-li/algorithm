// 376. 摆动序列

function wiggleMaxLength(nums: number[]): number {
    const n = nums.length
    const dp: number[] = Array(n).fill(1)
    let max = 1
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const s = nums[i] - nums[j]
            if ((j === 0 && s === 0) || (j !== 0 && s * dp[j] >= 0)) {
                continue
            } else if (Math.abs(dp[j]) + 1 > Math.abs(dp[i])) {
                dp[i] = Math.max(Math.abs(dp[j]) + 1, Math.abs(dp[i]))
                dp[i] = s > 0 ? dp[i] : -dp[i]
            }
        }
        max = Math.max(max, Math.abs(dp[i]))
    }
    return max
}
