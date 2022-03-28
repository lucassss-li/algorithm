// 73. 矩阵置零

function setZeroes(matrix: number[][]): void {
    const cols: Set<number> = new Set()
    const rows: Set<number> = new Set()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                cols.add(i)
                rows.add(j)
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (cols.has(i) || rows.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
}
