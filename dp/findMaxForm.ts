// 474. 一和零

function findMaxForm(strs: string[], m: number, n: number): number {
    const l = strs.length
    const dp = Array(l)
        .fill(0)
        .map(() =>
            Array(m + 1)
                .fill(0)
                .map(() => Array(n + 1).fill(0))
        )
    const [_m, _n] = getMN(strs[0])
    for (let j = _m; j <= m; j++) {
        for (let k = _n; k <= n; k++) {
            dp[0][j][k] = 1
        }
    }
    for (let i = 1; i < l; i++) {
        const [_m, _n] = getMN(strs[i])
        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                dp[i][j][k] = Math.max(
                    dp[i - 1][j][k],
                    j - _m >= 0 && k - _n >= 0
                        ? dp[i - 1][j - _m][k - _n] + 1
                        : 0
                )
            }
        }
    }
    return dp[l - 1][m][n]
    function getMN(str: string): number[] {
        const nums = [0, 0]
        ;([...str] as string[]).forEach((char: string) => {
            if (char === '1') {
                nums[1]++
            } else {
                nums[0]++
            }
        })
        return nums
    }
}
