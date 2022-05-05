// 69. x 的平方根

function mySqrt(x: number): number {
    let i = -1
    let j = x + 1
    while (j - i > 1) {
        const mid = i + Math.floor((j - i) / 2)
        const square = mid * mid
        if (square === x) {
            return mid
        } else if (square > x) {
            j = mid
        } else {
            i = mid
        }
    }
    return i
}
