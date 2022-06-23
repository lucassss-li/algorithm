// 139. 单词拆分

function wordBreak(s: string, wordDict: string[]): boolean {
    const n = s.length
    const dp = Array(n).fill(false)
    const set = new Set(wordDict)
    for (let i = 0; i < n; i++) {
        for (let j = i; j >= 0; j--) {
            const subStr = s.slice(j, i + 1)
            if (set.has(subStr)) {
                dp[i] = j === 0 ? true : dp[j - 1]
            }
            if (dp[i]) break
        }
    }
    return dp[n - 1]
}
