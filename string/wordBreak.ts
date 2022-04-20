// 139. 单词拆分
function wordBreak(s: string, wordDict: string[]): boolean {
    const set = new Set(wordDict)
    const length = s.length
    const dp: boolean[] = Array(length + 1).fill(false)
    dp[0] = true
    for (let i = 1; i < length + 1; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] && set.has(s.slice(j, i))) {
                dp[i] = true
                break
            }
        }
    }
    return dp[length]
}
