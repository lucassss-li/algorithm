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

function manacher(s: string): string {
    s = `#${[...s].join('#')}#`
    let max = 0
    let C = -1
    let R = -1
    const dp: number[] = []
    for (let i = 0; i < s.length; i++) {
        dp[i] = i >= R ? 1 : Math.min(R - i, dp[2 * C - i])
        while (i + dp[i] < s.length && i - dp[i] >= 0) {
            if (s[i + dp[i]] === s[i - dp[i]]) {
                dp[i] += 1
            } else {
                break
            }
        }
        if (i + dp[i] > R) {
            R = i + dp[i]
            C = i
        }
        max = dp[max] > dp[i] ? max : i
    }
    return s.slice(max - dp[max] + 1, max + dp[max]).replace(/#/g, '')
}

const res = manacher('a')
console.log(res)
