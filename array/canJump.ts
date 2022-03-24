//55. 跳跃游戏

//动态规划
//当前点是否能到达终点取决于当前点能达到的点是否能到达终点
function canJump1(nums: number[]): boolean {
    const n = nums.length
    const dp: boolean[] = Array(n).fill(false)
    dp[n - 1] = true
    for (let i = n - 2; i >= 0; i--) {
        for (let step = nums[i]; step > 0; step--) {
            if (i + step < n && dp[i + step]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[0]
}

//贪心算法
function canJump2(nums: number[]): boolean {
    let reach = 0
    for (let i = 0; i < nums.length; i++) {
        if (reach < i) {
            return false
        } else {
            reach = Math.max(i + nums[i], reach)
            if (reach > nums.length - 1) {
                return true
            }
        }
    }
    return true
}

const res = canJump2([3, 2, 1, 0, 4])
console.log(res)
