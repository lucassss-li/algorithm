// 413. 等差数列划分

//暴力搜索
function numberOfArithmeticSlices(nums: number[]): number {
    const n = nums.length
    if (n < 3) return 0
    let ans = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; i < n; j++) {
            if (j - i >= 2) {
                if (nums[j] - nums[j - 1] === nums[j - 1] - nums[j - 2]) {
                    ans++
                } else {
                    break
                }
            }
        }
    }
    return ans
}

//dp
function _numberOfArithmeticSlices(nums: number[]): number {
    const n = nums.length
    if (n < 3) return 0
    let ans = 0
    const dp = Array(n)
        .fill(0)
        .map(() => [0, 1])
    dp[0] = [Infinity, 1]
    for (let i = 1; i < n; i++) {
        const [d, n] = dp[i - 1]
        dp[i][0] = nums[i] - nums[i - 1]
        dp[i][1] = dp[i][0] === d ? n + 1 : 2
        dp[i][1] >= 3 && (ans += dp[i][1] - 2)
    }
    return ans
}
