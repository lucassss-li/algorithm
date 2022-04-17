// 68. 文本左右对齐

function fullJustify(words: string[], maxWidth: number): string[] {
    const length = words.length
    const ans: string[] = []
    const _ans: string[][] = []
    const nums: number[] = []
    let i = 0
    let j = 0
    let arr = []
    while (i < length) {
        let s = 0
        while (
            j < length &&
            s + (arr.length ? 1 : 0) + words[j].length <= maxWidth
        ) {
            s += words[j].length + (arr.length ? 1 : 0)
            arr.push(words[j])
            j++
        }
        i = j
        if (i < length) {
            nums.push(s)
            _ans.push(arr)
            arr = []
        }
    }
    j = j - arr.length
    for (let k = 0; k < _ans.length; k++) {
        const n = maxWidth - nums[k]
        if (_ans[k].length > 1) {
            const t = Math.floor(n / (_ans[k].length - 1))
            const p = n % (_ans[k].length - 1)
            let s = _ans[k][0]
            for (let r = 1; r < _ans[k].length; r++) {
                const y = 1 + t + (r <= p ? 1 : 0)
                const q = Array(y).fill(' ').join('')
                s = s + q + _ans[k][r]
            }
            ans.push(s)
        } else {
            ans.push(_ans[k][0] + Array(n).fill(' ').join(''))
        }
    }
    if (j < length) {
        let s = words[j]
        for (let k = j + 1; k < length; k++) {
            s = s + ' ' + words[k]
        }
        ans.push(s.padEnd(maxWidth, ' '))
    }
    return ans
}