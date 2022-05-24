// 1091. 二进制矩阵中的最短路径

function shortestPathBinaryMatrix(grid: number[][]): number {
    if (grid[0][0] === 1) return -1
    const POINT = [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1]
    ]
    const n = grid.length
    const queue = [[0, 0]]
    while (queue.length) {
        const [x, y] = queue.shift() as [number, number]
        if (x === n - 1 && y === n - 1) return grid[x][y] + 1
        for (const point of POINT) {
            const [i, j] = point
            if (
                x + i >= n ||
                x + i < 0 ||
                y + j >= n ||
                y + j < 0 ||
                grid[x + i][y + j] !== 0
            ) {
                continue
            } else {
                grid[x + i][y + j] = grid[x][y] + 1
                queue.push([x + i, y + j])
            }
        }
    }
    return -1
}
