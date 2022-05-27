// 417. 太平洋大西洋水流问题

function pacificAtlantic(heights: number[][]): number[][] {
    const DIRECTIONS = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
    const m = heights.length
    const n = heights[0].length
    type Point = [number, number]
    const ans: Point[] = []
    let stack: Point[] = []
    const visited = new Set<string>()
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            stack.push([i, j])
            let p_flag = false
            let a_flag = false
            while (stack.length) {
                const [x, y] = stack.pop() as Point
                visited.add(`${x}&${y}`)
                if (x === 0 || y === 0) {
                    p_flag = true
                }
                if (x + 1 === m || y + 1 === n) {
                    a_flag = true
                }
                for (const direction of DIRECTIONS) {
                    const [_x, _y] = [x + direction[0], y + direction[1]]
                    if (
                        _x >= 0 &&
                        _x < m &&
                        _y >= 0 &&
                        _y < n &&
                        Math.abs(heights[_x][_y]) <= heights[x][y] &&
                        !visited.has(`${_x}&${_y}`)
                    ) {
                        if (heights[_x][_y] < 0) {
                            p_flag = a_flag = true
                            break
                        }
                        stack.push([_x, _y])
                    }
                }
            }
            stack = []
            visited.clear()
            if (p_flag && a_flag) {
                heights[i][j] = -heights[i][j]
                ans.push([i, j])
            }
        }
    }
    return ans
}
