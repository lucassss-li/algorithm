//53. 最大子数组和

//计算出以每个点为结束点的最大连续数组最大和
//以当前点为结束点的最大连续数组最大和依赖于以前一个为结束点的最大连续数组最大和

function maxSubArray(nums: number[]): number {
    //pre储存的是以nums[i-1]为结束点的连续数组的最大和
    let pre = 0
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        //判断以前一个点为结束点的最大和是否为正数
        //如果为正数则以当前点为结束点的数组最大和为当前值+pre
        //否则为当前值
        if (pre <= 0) {
            pre = nums[i]
        } else {
            pre = nums[i] + pre
        }
        max = Math.max(pre, max)
    }
    return max
}
