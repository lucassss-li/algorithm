// 188. 买卖股票的最佳时机 IV

function maxProfit(k: number, prices: number[]): number {
    if (prices.length === 0) return 0
    const n = prices.length
    const s = k * 2 + 1
    const dp = Array(n)
        .fill(0)
        .map(() => Array(s).fill(0))
    for (let j = 0; j < s; j++) {
        dp[0][j] = -Infinity
    }
    dp[0][0] = 0
    dp[0][k + 1] = -prices[0]
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < s; j++) {
            if (j > k) {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i - 1][j - k - 1] - prices[i]
                )
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j + k] + prices[i])
            }
        }
    }
    return Math.max(...dp[n - 1])
}
