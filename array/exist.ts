//79. 单词搜索

function exist(board: string[][], word: string): boolean {
    const h = board.length
    const w = board[0].length
    const visited: boolean[][] = Array(h)
        .fill(0)
        .map(() => Array(w).fill(false))
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
    function check(i: number, j: number, s: string, k: number): boolean {
        if (board[i][j] !== s[k]) {
            return false
        } else if (k === s.length - 1) {
            return true
        }
        visited[i][j] = true
        for (const direction of directions) {
            const new_i = i + direction[0]
            const new_j = j + direction[1]
            if (
                new_i >= 0 &&
                new_i < h &&
                new_j >= 0 &&
                new_j < w &&
                !visited[new_i][new_j]
            ) {
                const res = check(new_i, new_j, s, k + 1)
                if (res) {
                    return true
                }
            }
        }
        visited[i][j] = false
        return false
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (check(i, j, word, 0)) {
                return true
            }
        }
    }
    return false
}
