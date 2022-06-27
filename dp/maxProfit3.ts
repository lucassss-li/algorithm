// 123. 买卖股票的最佳时机 III

function maxProfit(prices: number[]): number {
    const n = prices.length
    const dp = Array(n)
        .fill(0)
        .map(() => Array(5).fill(0))
    dp[0][0] = -prices[0]
    dp[0][1] = -Infinity
    dp[0][2] = 0
    dp[0][3] = -Infinity
    dp[0][4] = -Infinity
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3] - prices[i])
        dp[i][2] = 0
        dp[i][3] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][3])
        dp[i][4] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][4])
    }
    return Math.max(...dp[n - 1])
}
