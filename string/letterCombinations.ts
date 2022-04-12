// 17. 电话号码的字母组合
function letterCombinations(digits: string): string[] {
    const ans: string[] = []
    const n = digits.length
    process([], 0)
    function process(data: string[], index: number) {
        if (index >= n) {
            data.length && ans.push(data.join(''))
            return
        }
        let base = 91 + parseInt(digits[index]) * 3
        if (+digits[index] > 7) {
            base++
        }
        let step = 3
        if (+digits[index] === 7 || +digits[index] === 9) {
            step++
        }
        for (let i = 0; i < step; i++) {
            data.push(String.fromCharCode(base + i))
            process(data, index + 1)
            data.pop()
        }
    }
    return ans
}
