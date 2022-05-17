// 122. 买卖股票的最佳时机 II

function maxProfit(prices: number[]): number {
    let ans = 0
    let flag = false
    let cur = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            if (flag) {
                continue
            } else {
                flag = true
                cur = prices[i]
            }
        } else {
            if (flag) {
                ans += prices[i] - cur
                flag = false
            } else {
                continue
            }
        }
    }
    return ans
}
