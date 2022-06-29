// 650. 只有两个键的键盘

function minSteps(n: number): number {
    const dp = Array(n + 1)
    dp[0] = 0
    dp[1] = 0
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = i
        for (let j = 2; j < i; j++) {
            for (let k = 2; k <= j; k++) {
                if (k * j !== i) continue
                dp[i] = Math.min(dp[i], dp[j] + k)
            }
        }
    }
    return dp[n]
}
