// 10. 正则表达式匹配

function isMatch(s: string, p: string): boolean {
    const sLen = s.length
    const pLen = p.length
    const dp: boolean[][] = Array(sLen + 1)
        .fill(0)
        .map(() => Array(pLen + 1).fill(false))

    for (let i = 0; i < sLen + 1; i++) {
        for (let j = 0; j < pLen + 1; j++) {
            if (j === 0 && i !== 0) {
                //目标字符串不为空，匹配模式为空，结果必为false
                dp[i][j] = false
            } else if (i === 0 && j === 0) {
                //目标字符串为空，匹配模式为空，结果必为true
                dp[i][j] = true
            } else if (i === 0 && j !== 0) {
                //目标字符串为空，匹配模式不为空
                //那么匹配模式只有在最后一个字符为*时才可能匹配上空串
                if (p[j - 1] === '*') {
                    dp[i][j] = dp[i][j - 2]
                }
            } else if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                //最后一个字符和匹配模式的最后一个字符匹配上
                //那么当前是否匹配取决于前面是否匹配
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                //如果最后一个匹配模式为*号，则有可能匹配0~n个*号前面的字符
                if (p[j - 1] === '*') {
                    //最后一个字符和匹配模式相等
                    if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                        dp[i][j] =
                            dp[i][j - 2] || //匹配0个，a和aa*
                            dp[i - 1][j - 2] || //匹配1个，a和a*
                            dp[i - 1][j] //匹配2个以上，直接去除目标字符串最后一个字符再匹配，aaaaa和a*
                    } else {
                        //最后一个字符和匹配模式不相等，那么匹配模式最后两个字符匹配空串
                        dp[i][j] = dp[i][j - 2]
                    }
                }
            }
        }
    }
    return dp[sLen][pLen]
}
