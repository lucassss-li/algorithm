// 646. 最长数对链

function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => a[0] - b[0])
    const n = pairs.length
    const dp: number[] = Array(n).fill(1)
    let max = 0
    for (let i = 0; i < pairs.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (pairs[i][0] > pairs[j][1]) {
                dp[i] = dp[j] + 1
                break
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
}
