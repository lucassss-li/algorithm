// 633. 平方数之和

function judgeSquareSum(c: number): boolean {
    let i = 0
    let j = Math.ceil(Math.pow(c, 0.5))
    while (i <= j) {
        const sum = i * i + j * j
        if (sum === c) {
            return true
        } else if (sum > c) {
            j--
        } else {
            i++
        }
    }
    return false
}
