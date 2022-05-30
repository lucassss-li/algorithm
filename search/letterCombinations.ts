// 17. 电话号码的字母组合

function letterCombinations(digits: string): string[] {
    const ans: string[] = []
    const path: string[] = []
    process(0)
    function process(index: number) {
        if (index >= digits.length) {
            ans.push(path.join(''))
            return
        }
        const num: number = +digits[index]
        let code = 97 + (num - 2) * 3
        let j = 3
        if (num > 7) {
            code++
        }
        if (num === 7 || num === 9) {
            j = 4
        }
        for (let i = 0; i < j; i++) {
            path.push(String.fromCharCode(code + i))
            process(index + 1)
            path.pop()
        }
    }
    return ans
}
