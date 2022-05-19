// 135. 分发糖果
function candy(ratings: number[]): number {
    const ans = [1]
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            ans[i] = ans[i - 1] + 1
        } else if (ratings[i] === ratings[i - 1]) {
            ans[i] = 1
        } else {
            ans[i] = 1
            process(ans, i - 1)
        }
    }
    function process(nums: number[], index: number) {
        while (index >= 0) {
            if (
                ratings[index] > ratings[index + 1] &&
                ans[index] <= ans[index + 1]
            ) {
                ans[index--]++
            } else {
                return
            }
        }
    }
    return ans.reduce((total, num) => total + num, 0)
}
