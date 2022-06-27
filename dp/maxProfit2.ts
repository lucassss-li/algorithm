// 714. 买卖股票的最佳时机含手续费

function maxProfit(prices: number[], fee: number): number {
    const n = prices.length
    const dp = Array(n)
        .fill(0)
        .map(() => Array(2).fill(0))
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
        dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
    }
    return dp[n - 1][0]
}
