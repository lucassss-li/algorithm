// 140. 单词拆分 II

function wordBreak2(s: string, wordDict: string[]): string[] {
    const set = new Set(wordDict)
    const ans: string[] = []
    process([], 0)
    function process(data: string[], i: number) {
        if (i >= s.length) {
            ans.push(data.join(' '))
            return
        }
        for (let j = 1; j <= 10 && i + j <= s.length; j++) {
            const sub_s = s.slice(i, i + j)
            if (set.has(sub_s)) {
                data.push(sub_s)
                process(data, i + j)
                data.pop()
            }
        }
    }
    return ans
}
