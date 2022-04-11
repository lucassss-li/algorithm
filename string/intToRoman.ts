// 12. 整数转罗马数字

function intToRoman(num: number): string {
    let ans = ''
    const romans = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']]
    const patterns = [
        [],
        [0],
        [0, 0],
        [0, 0, 0],
        [0, 1],
        [1],
        [1, 0],
        [1, 0, 0],
        [1, 0, 0, 0],
        [0, -1]
    ]
    for (let i = 0; i < String(num).length; i++) {
        const remainder = ((num % 10 ** (i + 1)) - (num % 10 ** i)) / 10 ** i
        let _ans = ''
        const pattern = patterns[remainder]
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] === -1) {
                _ans += romans[i + 1][0]
            } else {
                _ans += romans[i][pattern[j]]
            }
        }
        ans = _ans + ans
    }
    return ans
}
