// 279. 完全平方数

//BFS
function numSquares_BFS(n: number): number {
    const queue = [[n, 0]]
    while (queue.length > 0) {
        const [remain, level] = queue.shift() as [number, number]
        if (remain === 0) return level
        const arr = []
        for (let i = 0; i ** 2 <= remain; i++) {
            arr.unshift([remain - i ** 2, level + 1])
        }
        queue.push(...arr)
    }
    return -1
}

//dp
function numSquares(n: number): number {
    const dp: number[] = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = Infinity
        for (let j = 0; j <= i; j++) {
            const a = j ** 2
            if (a > i) break
            if (a === i) {
                dp[i] = 1
                break
            }
            dp[i] = Math.min(dp[i], dp[i - a] + 1)
        }
    }
    return dp[n]
}
