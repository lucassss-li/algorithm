//54. 螺旋矩阵
function spiralOrder(matrix: number[][]): number[] {
    const ans: number[] = []
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    let cur = [0, 0]
    while (top < bottom && left < right) {
        while (cur[1] <= right) {
            ans.push(matrix[cur[0]][cur[1]])
            cur[1]++
        }
        cur[1]--
        cur[0]++
        while (cur[0] <= bottom) {
            ans.push(matrix[cur[0]][cur[1]])
            cur[0]++
        }
        cur[0]--
        cur[1]--
        while (cur[1] >= left) {
            ans.push(matrix[cur[0]][cur[1]])
            cur[1]--
        }
        cur[0]--
        cur[1]++
        while (cur[0] > top) {
            ans.push(matrix[cur[0]][cur[1]])
            cur[0]--
        }
        top++
        bottom--
        left++
        right--
        cur = [top, left]
    }
    if (top === bottom && left === right) {
        ans.push(matrix[top][left])
    }
    if (top === bottom && left !== right) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i])
        }
    }
    if (left === right && top !== bottom) {
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right])
        }
    }
    return ans
}
