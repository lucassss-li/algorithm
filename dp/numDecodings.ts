// 91. 解码方法

function numDecodings(s: string): number {
    const n = s.length
    const nums: number[] = [...s].map(char => +char)
    const dp: number[] = []
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            if (i === 0 || nums[i - 1] > 2 || nums[i - 1] === 0) {
                return 0
            } else {
                dp[i] = i - 2 >= 0 ? dp[i - 2] : 1
            }
        } else {
            dp[i] = i - 1 >= 0 ? dp[i - 1] : 1
            if (nums[i - 1] === 1 || (nums[i - 1] === 2 && nums[i] <= 6)) {
                if (i - 2 >= 0) {
                    dp[i] += dp[i - 2]
                } else {
                    dp[i] += 1
                }
            }
        }
    }
    return dp[n - 1]
}
