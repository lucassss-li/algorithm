// 166. 分数到小数

function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) return '0'
    const flag =
        (numerator > 0 && denominator > 0) || (numerator < 0 && denominator < 0)
    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
    const ans1 = Math.floor(numerator / denominator) + ''
    let ans2 = ''
    let remain = numerator % denominator
    const set = new Set()
    const arr = []
    set.add(remain)
    arr.push(remain)
    while (remain) {
        ans2 = ans2 + Math.floor((remain * 10) / denominator)
        remain = (remain * 10) % denominator
        if (set.has(remain)) {
            break
        } else {
            arr.push(remain)
            set.add(remain)
        }
    }
    let ans
    if (!ans2) {
        ans = ans1
    } else if (remain) {
        const index = arr.findIndex(el => el === remain)
        ans = `${ans1}.${ans2.slice(0, index)}(${ans2.slice(index)})`
    } else {
        ans = `${ans1}.${ans2}`
    }
    return flag ? ans : '-' + ans
}
