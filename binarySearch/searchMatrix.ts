// 240. 搜索二维矩阵 II

function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length
    const n = matrix[0].length
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] > target) {
            return false
        }
        if (
            matrix[i][0] <= target &&
            matrix[i][n - 1] >= target &&
            binarySearch(matrix[i], target)
        ) {
            return true
        }
    }
    return false
    function binarySearch(arr: number[], target: number): boolean {
        let i = -1
        let j = arr.length
        while (j - i > 1) {
            const mid = i + Math.floor((j - i) / 2)
            if (arr[mid] === target) {
                return true
            } else if (arr[mid] > target) {
                j = mid
            } else {
                i = mid
            }
        }
        return false
    }
}
