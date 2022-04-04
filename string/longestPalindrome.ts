// 5. 最长回文子串

function longestPalindrome(s: string): string {
    const n = s.length
    const dp: boolean[][] = Array(n)
        .fill(0)
        .map(() => Array(n).fill(false))
    let ans = ''
    for (let l = 0; l < n; l++) {
        for (let i = 0; i + l < n; i++) {
            const j = i + l
            if (i === j) {
                dp[i][j] = true
            } else if (l === 1 && s[i] === s[j]) {
                dp[i][j] = true
            } else if (dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true
            }
            if (dp[i][j] && j - i + 1 > ans.length) {
                ans = s.slice(i, j + 1)
            }
        }
    }
    return ans
}