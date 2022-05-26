// 130. 被围绕的区域

function solve(board: string[][]): void {
    const m = board.length
    const n = board[0].length
    const DIRECTIONS = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
    const path = new Set()
    const stack = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let flag = true
            if (board[i][j] === 'O') {
                stack.push([i, j])
            }
            while (stack.length) {
                const [x, y] = stack.pop() as [number, number]
                path.add(x + '&' + y)
                for (const direction of DIRECTIONS) {
                    const [_x, _y] = [x + direction[0], y + direction[1]]

                    if (_x >= 0 && _x < m && _y >= 0 && _y < n) {
                        if (board[_x][_y] === 'O' && !path.has(_x + '&' + _y)) {
                            stack.push([_x, _y])
                        }
                    } else {
                        flag = false
                    }
                }
            }
            if (flag) {
                for (const step of path) {
                    const [x, y] = (<string>step).split('&')
                    board[+x][+y] = 'X'
                }
            }
            path.clear()
        }
    }
}
