// 79. 单词搜索

function exist(board: string[][], word: string): boolean {
    const m = board.length
    const n = board[0].length
    const DIRECTIONS = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
    const visited = new Set<string>()
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                visited.clear()
                visited.add(`${i}&${j}`)
                const flag = process([i, j], 1)
                if (flag) return true
            }
        }
    }
    function process(loc: number[], index: number): boolean {
        if (index >= word.length) {
            return true
        }
        for (const direction of DIRECTIONS) {
            const [x, y] = [loc[0] + direction[0], loc[1] + direction[1]]
            if (
                x >= 0 &&
                x < m &&
                y >= 0 &&
                y < n &&
                board[x][y] === word[index] &&
                !visited.has(`${x}&${y}`)
            ) {
                visited.add(`${x}&${y}`)
                const flag = process([x, y], index + 1)
                if (flag) return true
                visited.delete(`${x}&${y}`)
            }
        }
        return false
    }
    return false
}
