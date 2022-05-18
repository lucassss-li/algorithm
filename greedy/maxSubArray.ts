// 53. 最大子数组和

//动态规划
function maxSubArray1(nums: number[]): number {
    const dp: number[] = [nums[0]]
    let max = dp[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[i - 1] > 0 ? nums[i] + dp[i - 1] : nums[i]
        max = Math.max(dp[i], max)
    }
    return max
}

//贪心
function maxSubArray(nums: number[]): number {
    let max = -Infinity
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (sum <= 0) {
            sum = nums[i]
        } else {
            sum = sum + nums[i]
        }
        max = Math.max(sum, max)
    }
    return max
}
