// 367. 有效的完全平方数

function isPerfectSquare(num: number): boolean {
    let i = 0
    let j = num
    let mid = 0
    while (i <= j) {
        mid = i + Math.floor((j - i) / 2)
        const square = mid * mid
        if (square === num) {
            return true
        } else if (square > num) {
            j = mid - 1
        } else {
            i = mid + 1
        }
    }
    return false
}
