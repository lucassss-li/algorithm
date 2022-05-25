// 695. 岛屿的最大面积

function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    let ans = 0
    let area = 0
    const DIRECTIONS = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
    for (let k = 0; k < m; k++) {
        for (let a = 0; a < n; a++) {
            if (grid[k][a] !== 1) continue
            const stack = [[k, a]]
            grid[k][a] = 2
            while (stack.length) {
                const [x, y] = stack.pop() as [number, number]
                area++
                for (const direction of DIRECTIONS) {
                    const [i, j] = [x + direction[0], y + direction[1]]
                    if (
                        i >= 0 &&
                        i < m &&
                        j >= 0 &&
                        j < n &&
                        grid[i][j] === 1
                    ) {
                        grid[i][j] = 2
                        stack.push([i, j])
                    }
                }
            }
            ans = Math.max(area, ans)
            area = 0
        }
    }
    return ans
}
