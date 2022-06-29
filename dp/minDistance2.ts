// 72. 编辑距离

function minDistance(word1: string, word2: string): number {
    const l1 = word1.length
    const l2 = word2.length
    const dp = Array(l1 + 1)
        .fill(0)
        .map(() => Array(l2 + 1).fill(0))
    for (let i = 0; i <= l1; i++) {
        dp[i][0] = i
    }
    for (let i = 0; i <= l2; i++) {
        dp[0][i] = i
    }
    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] =
                    Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            }
        }
    }
    return dp[l1][l2]
}
