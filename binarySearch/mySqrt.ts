// 69. x 的平方根

function mySqrt(x: number): number {
    let i = 0
    let j = x
    let mid = 0
    while (i <= j) {
        mid = i + Math.floor((j - i) / 2)
        const square = mid * mid
        if (square === x) {
            return mid
        } else if (square < x) {
            i = mid + 1
        } else {
            j = mid - 1
        }
    }
    return j
}
