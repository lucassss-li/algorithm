// 213. 打家劫舍 II

function rob(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }
    function inner(arr: number[]): number {
        const n = arr.length
        const dp: number[] = []
        for (let i = 0; i < n; i++) {
            const a = i - 2 >= 0 ? dp[i - 2] + arr[i] : arr[i]
            dp[i] = Math.max(a, i - 1 >= 0 ? dp[i - 1] : 0)
        }
        return dp[n - 1]
    }
    const dp1 = inner(nums.slice(0, nums.length - 1))
    const dp2 = inner(nums.slice(1))
    return Math.max(dp1, dp2)
}
