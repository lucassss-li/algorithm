// 63. 不同路径 II
//暴力递归
function uniquePathsWithObstacles1(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length - 1
    const n = obstacleGrid[0].length - 1
    let res = 0
    process(0, 0)
    function process(i: number, j: number) {
        if (i > m || j > n || obstacleGrid[i][j] === 1) {
            return
        }
        if (i === m && j === n) {
            res++
            return
        }
        process(i + 1, j)
        process(i, j + 1)
    }
    return res
}

//动态规划
function uniquePathsWithObstacles2(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length - 1
    const n = obstacleGrid[0].length - 1
    const dp: number[][] = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0))
    dp[m][n] = 1
    for (let i = m; i >= 0; i--) {
        for (let j = n; j >= 0; j--) {
            if (obstacleGrid[i][j]) {
                dp[i][j] = 0
                continue
            }
            if (i + 1 <= m) {
                dp[i][j] += dp[i + 1][j]
            }
            if (j + 1 <= n) {
                dp[i][j] += dp[i][j + 1]
            }
        }
    }
    return dp[0][0]
}