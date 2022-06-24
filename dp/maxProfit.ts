// 309. 最佳买卖股票时机含冷冻期

function maxProfit(prices: number[]): number {
    const n = prices.length
    const dp = Array(n).fill(0)
    for (let i = 1; i < n; i++) {
        dp[i] = dp[i - 1]
        for (let j = i - 1; j >= 0; j--) {
            dp[i] = Math.max(
                (j - 2 >= 0 ? dp[j - 2] : 0) + prices[i] - prices[j],
                dp[i]
            )
        }
    }
    return dp[n - 1]
}

function _maxProfit(prices: number[]): number {
    if (prices.length == 0) {
        return 0
    }

    const n = prices.length
    const dp = Array(n)
        .fill(0)
        .map(() => Array(3).fill(0))
    dp[0][0] = -prices[0]
    for (let i = 1; i < n; ++i) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
        dp[i][1] = dp[i - 1][0] + prices[i]
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
    }
    return Math.max(dp[n - 1][1], dp[n - 1][2])
}
