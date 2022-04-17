// 38. 外观数列

function countAndSay(n: number): string {
    const dp: string[] = ['1']
    for (let i = 1; i < n; i++) {
        const str = dp[i - 1]
        let l = 0
        let r = 0
        let ans = ''
        while (r < str.length) {
            if (str[r] === str[l]) {
                r++
            } else {
                ans = `${ans}${r - l}${str[l]}`
                l = r
            }
        }
        if (l !== r) {
            ans = `${ans}${r - l}${str[l]}`
        }
        dp[i] = ans
    }
    return dp[n - 1]
}
