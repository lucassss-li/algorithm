// 37. 解数独

function solveSudoku(board: string[][]): void {
    process(0, 0)
    function process(x: number, y: number): boolean {
        if (x >= 9 || y >= 9) {
            return true
        }
        if (board[x][y] !== '.') {
            return process(...next(x, y))
        } else {
            for (let i = 1; i <= 9; i++) {
                board[x][y] = String(i)
                if (check(x, y)) {
                    const flag = process(...next(x, y))
                    if (flag) {
                        return true
                    } else {
                        board[x][y] = '.'
                    }
                } else {
                    board[x][y] = '.'
                }
            }
        }
        return false
    }
    function check(x: number, y: number): boolean {
        const n = board[x][y]
        for (let i = 0; i < 9; i++) {
            if (i !== y && board[x][i] === n) return false
        }
        for (let i = 0; i < 9; i++) {
            if (i !== x && board[i][y] === n) return false
        }
        const _x = x - (x % 3)
        const _y = y - (y % 3)
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (
                    !(_x + i === x && y === _y + j) &&
                    board[_x + i][_y + j] === n
                )
                    return false
            }
        }
        return true
    }
    function next(x: number, y: number): [number, number] {
        if (y === 8) {
            return [x + 1, 0]
        } else {
            return [x, y + 1]
        }
    }
}
