// 121. 买卖股票的最佳时机
//贪心算法
function maxProfit(prices: number[]): number {
    let maxPrice = prices[prices.length - 1]
    let max = -Infinity
    for (let i = prices.length - 2; i >= 0; i--) {
        const profit = maxPrice - prices[i]
        max = Math.max(max, profit)
        maxPrice = Math.max(prices[i], maxPrice)
    }
    return max > 0 ? max : 0
}

// 单调栈
function _maxProfit(prices: number[]): number {
    const stack: number[] = []
    let i = 0
    let max = -Infinity
    while (i < prices.length) {
        if (stack.length === 0 || stack[stack.length - 1] >= prices[i]) {
            stack.push(prices[i])
            i++
        } else {
            max = Math.max(max, prices[i] - stack[stack.length - 1])
            i++
        }
    }
    return max > 0 ? max : 0
}
