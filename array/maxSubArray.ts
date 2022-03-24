//53. 最大子数组和

//暴力版本
//时间复杂度O(n**2)
function maxSubArray1(nums: number[]): number {
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const num = sum(nums, i, j)
            if (num > max) {
                max = num
            }
        }
    }
    return max
    function sum(nums: number[], i: number, j: number) {
        let res = 0
        while (i <= j) {
            res += nums[i++]
        }
        return res
    }
}

//动态规划
//分析：子数组必定以某一个点开始或者结束，按结束节点遍历，每个结束节点的最大和依赖于上一个节点
//所以可以使用动态规划
//子问题：以每一个元素为结束节点的最大连续和，当前节点必须选择
//转移方程：dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
//返回值：dp中的最大值
function maxSubArray2(nums: number[]): number {
    const dp: number[] = []
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }
    let res = -Infinity
    for (let i = 0; i < nums.length; i++) {
        res = dp[i] > res ? dp[i] : res
    }
    return res
}

//优化
//每个节点只依赖于前一个节点，所以只需要使用一个变量来储存前一个值
//并在每次循环内修改最大值
function maxSubArray3(nums: number[]): number {
    let pre = nums[0]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i])
        max = Math.max(max, pre)
    }
    return max
}
