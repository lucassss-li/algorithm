// 367. 有效的完全平方数

function isPerfectSquare(num: number): boolean {
    let i = -1
    let j = num + 1
    while (j - i > 1) {
        const mid = i + Math.floor((j - i) / 2)
        const square = mid * mid
        if (square === num) {
            return true
        } else if (square > num) {
            j = mid
        } else {
            i = mid
        }
    }
    return false
}
