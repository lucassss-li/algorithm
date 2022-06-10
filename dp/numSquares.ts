// 279. 完全平方数

function numSquares(n: number): number {
    const dp: number[] = Array(n + 1).fill(Infinity)
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            const a = j ** 2
            if (a > i) break
            if (a === i) {
                dp[i] = 1
                break
            }
            dp[i] = Math.min(dp[i], dp[i - a] + 1)
        }
    }
    return dp[n]
}
