// 10. 正则表达式匹配

function isMatch(s: string, p: string): boolean {
    const sLen = s.length
    const pLen = p.length
    const dp: boolean[][] = Array(sLen + 1)
        .fill(0)
        .map(() => Array(pLen + 1).fill(false))
    for (let i = 0; i <= sLen; i++) {
        for (let j = 0; j <= pLen; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = true
            } else if (i !== 0 && j === 0) {
                dp[i][j] = false
            } else if (i === 0 && j !== 0) {
                if (p[j - 1] === '*') {
                    dp[i][j] = dp[i][j - 2]
                }
            } else if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] === '*') {
                if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
                } else {
                    dp[i][j] = dp[i][j - 2]
                }
            }
        }
    }
    return dp[sLen][pLen]
}
