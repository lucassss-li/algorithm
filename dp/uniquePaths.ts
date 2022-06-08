// 62. 不同路径

function uniquePaths(m: number, n: number): number {
    const dp: number[][] = Array(m)
        .fill(0)
        .map(() => Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i - 1 >= 0 && j - 1 >= 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            } else if (i - 1 >= 0) {
                dp[i][j] = dp[i - 1][j]
            } else if (j - 1 >= 0) {
                dp[i][j] = dp[i][j - 1]
            } else {
                dp[i][j] = 1
            }
        }
    }
    return dp[m - 1][n - 1]
}
