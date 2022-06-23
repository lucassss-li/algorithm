// 322. 零钱兑换

function coinChange(coins: number[], amount: number): number {
    const n = coins.length
    const dp = Array(amount + 1).fill(0)
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < n; j++) {
            const l = i - coins[j]
            const s = l >= 0 ? (l === 0 ? 1 : dp[l] > 0 ? dp[l] + 1 : 0) : 0
            if (dp[i] === 0) {
                dp[i] = s
            } else {
                dp[i] = Math.min(dp[i], s === 0 ? Infinity : s)
            }
        }
    }
    return dp[amount] === 0 && amount !== 0 ? -1 : dp[amount]
}

function _coinChange(coins: number[], amount: number): number {
    const n = coins.length
    const dp = Array(amount + 1).fill(0)
    for (let i = 0; i < n; i++) {
        dp[coins[i]] = 1
    }
    for (let i = 1; i <= amount; i++) {
        for (let j = 1; j < i; j++) {
            const s = dp[j] > 0 && dp[i - j] > 0 ? dp[j] + dp[i - j] : 0
            if (dp[i] === 0) {
                dp[i] = s
            } else {
                dp[i] = Math.min(s === 0 ? Infinity : s, dp[i])
            }
        }
    }
    return dp[amount] === 0 && amount !== 0 ? -1 : dp[amount]
}
