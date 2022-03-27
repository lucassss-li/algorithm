// 59. 螺旋矩阵 II
function generateMatrix(n: number): number[][] {
    const res = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0))
    let top = 0
    let left = 0
    let bottom = n - 1
    let right = n - 1
    const total = n ** 2
    let val = 1
    while (val <= total) {
        for (let i = left; i <= right; i++) {
            res[top][i] = val++
        }
        for (let i = top + 1; i <= bottom; i++) {
            res[i][right] = val++
        }
        for (let i = right - 1; i >= left; i--) {
            res[bottom][i] = val++
        }
        for (let i = bottom - 1; i > top; i--) {
            res[i][left] = val++
        }
        top++
        bottom--
        left++
        right--
    }
    return res
}
