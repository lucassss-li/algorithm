// 44. 通配符匹配

function isMatch(s: string, p: string): boolean {
    const sLen = s.length
    const pLen = p.length
    const dp: boolean[][] = Array(pLen + 1)
        .fill(0)
        .map(() => Array(sLen + 1).fill(false))
    for (let i = 0; i < pLen + 1; i++) {
        for (let j = 0; j < sLen + 1; j++) {
            if (i === 0 && j === 0) {
                dp[i][i] = true
            } else if (i === 0 && j !== 0) {
                dp[i][j] = false
            } else if (i !== 0 && j === 0) {
                if (p[i - 1] === '*') {
                    dp[i][j] = dp[i - 1][j]
                }
            } else {
                if (s[j - 1] === p[i - 1] || p[i - 1] === '?') {
                    dp[i][j] = dp[i - 1][j - 1]
                } else if (p[i - 1] === '*') {
                    for (let k = j; k >= 0; k--) {
                        if (dp[i - 1][k]) {
                            dp[i][j] = true
                            break
                        }
                    }
                }
            }
        }
    }
    return dp[pLen][sLen]
}
