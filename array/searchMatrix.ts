// 74. 搜索二维矩阵

function searchMatrix(matrix: number[][], target: number): boolean {
    if (target < matrix[0][0]) {
        return false
    }
    let row = 0
    for (; row < matrix.length; row++) {
        if (
            matrix[row][0] <= target &&
            target <= matrix[row][matrix[0].length - 1]
        ) {
            break
        }
    }
    if (row >= matrix.length) {
        return false
    }
    const data = matrix[row]
    return binarySearch(data, 0, data.length - 1, target)
    function binarySearch(
        data: number[],
        left: number,
        right: number,
        target: number
    ): boolean {
        if (left > right) {
            return false
        }
        const mid = (left + right) >> 1
        if (data[mid] === target) {
            return true
        } else if (data[mid] < target) {
            return binarySearch(data, mid + 1, right, target)
        } else {
            return binarySearch(data, left, mid - 1, target)
        }
    }
}
