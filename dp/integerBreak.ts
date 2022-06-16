// 343. 整数拆分

function integerBreak(n: number): number {
    const dp: number[] = Array(n + 1).fill(0)
    dp[0] = 0
    dp[1] = dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = i - 1; j > 0; j--) {
            dp[i] = Math.max(j * dp[i - j], dp[i], j * (i - j))
        }
    }
    return dp[n]
}