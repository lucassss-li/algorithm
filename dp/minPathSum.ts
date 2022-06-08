// 64. 最小路径和

//DFS
function _minPathSum(grid: number[][]): number {
    let min = +Infinity
    const m = grid.length - 1
    const n = grid[0].length - 1
    const directions = [
        [1, 0],
        [0, 1]
    ]
    const stack = [[[0, 0], 0]]
    const path: number[] = []
    let cur_level = 0
    while (stack.length) {
        const [[x, y], level] = stack.pop() as [number[], number]
        while (cur_level >= level) {
            path.pop()
            cur_level--
        }
        cur_level = level
        path.push(grid[x][y])
        const sum = path.reduce((total, num) => total + num, 0)
        if (x === m && y === n) {
            min = Math.min(min, sum)
        } else if (sum >= min) {
            continue
        } else {
            for (const [i, j] of directions) {
                if (x + i <= m && y + j <= n) {
                    stack.push([[x + i, y + j], level + 1])
                }
            }
        }
    }
    return min
}

//DP
function minPathSum(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    const dp: number[][] = Array(m)
        .fill(0)
        .map(() => Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i - 1 >= 0 && j - 1 >= 0) {
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
            } else if (i - 1 >= 0) {
                dp[i][j] = grid[i][j] + dp[i - 1][j]
            } else if (j - 1 >= 0) {
                dp[i][j] = grid[i][j] + dp[i][j - 1]
            } else {
                dp[i][j] = grid[i][j]
            }
        }
    }
    return dp[m - 1][n - 1]
}
