// 66. 加一
function plusOne(digits: number[]): number[] {
    const res: number[] = []
    let flag = true
    for (let i = digits.length - 1; i >= 0; i--) {
        if (flag) {
            const num = digits[i] + 1
            if (num > 9) {
                res[i] = 0
            } else {
                res[i] = num
                flag = false
            }
        } else {
            res[i] = digits[i]
        }
    }
    if (flag) {
        res.unshift(1)
    }
    return res
}
