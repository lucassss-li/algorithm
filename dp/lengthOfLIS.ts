// 300. 最长递增子序列

//求长度
function lengthOfLIS(nums: number[]): number {
    const n = nums.length
    const dp: number[] = Array(n).fill(1)
    let max = 0
    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
}

//求结果
function LIS(nums: number[]): number[] {
    const n = nums.length
    const dp: number[][] = Array(n)
        .fill(0)
        .map((item, index) => [nums[index]])
    let ans: number[] = []
    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                if (dp[i].length < dp[j].length + 1) {
                    dp[i] = [...dp[j], nums[i]]
                }
            }
        }
        if (dp[i].length > ans.length) {
            ans = dp[i]
        }
    }
    return ans
}
