// 1143. 最长公共子序列

function longestCommonSubsequence(text1: string, text2: string): number {
    const n1 = text1.length
    const n2 = text2.length
    const dp = Array(n1)
        .fill(0)
        .map(() => Array(n2).fill(0))
    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < n2; j++) {
            if (text1[i] === text2[j]) {
                if (i > 0 && j > 0) {
                    dp[i][j] = dp[i - 1][j - 1] + 1
                } else {
                    dp[i][j] = 1
                }
            } else {
                dp[i][j] = Math.max(
                    i - 1 >= 0 && j - 1 >= 0 ? dp[i - 1][j - 1] : 0,
                    i - 1 >= 0 ? dp[i - 1][j] : 0,
                    j - 1 >= 0 ? dp[i][j - 1] : 0
                )
            }
        }
    }
    return dp[n1 - 1][n2 - 1]
}
