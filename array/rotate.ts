// 48. 旋转图像

function rotate1(matrix: number[][]): void {
    const n = matrix.length
    const help: number[][] = Array(n).fill(0).map(() => Array(n).fill(0))
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) { 
            help[j][n-i-1] = matrix[i][j]
        }
    }
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) { 
            matrix[i][j] = help[i][j]
        }
    }
};

function rotate2(matrix: number[][]): void {
    let n = matrix.length >> 1
    let i = 0
    while (n > 0) {
        const data: number[] = []
        let x_limit = i
        let y_limit = i + 2 * n - (matrix.length & 1 ? 0 : 1)
        const step = y_limit - x_limit
        let x = i
        let y = i
        while (y < y_limit) {
            data.push(matrix[x][y])
            y++
        }
        while (x < y_limit) {
            data.push(matrix[x][y])
            x++
        }
        while (y > x_limit) {
            data.push(matrix[x][y])
            y--
        }
        while (x > x_limit) {
            data.push(matrix[x][y])
            x--
        }
        data.splice(0, 0, ...data.splice(-step, step))
        x = i
        y = i
        let index = 0
        while (y < y_limit) {
            matrix[x][y] = data[index++]
            y++
        }
        while (x < y_limit) {
            matrix[x][y] = data[index++]
            x++
        }
        while (y > x_limit) {
            matrix[x][y] = data[index++]
            y--
        }
        while (x > x_limit) {
            matrix[x][y] = data[index++]
            x--
        }
        n--
        i++
    }
}