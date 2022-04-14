// 32. 最长有效括号

//动态规划
function longestValidParentheses_dp(s: string): number {
    const n = s.length
    const dp: number[] = Array(n).fill(0)
    let max = 0
    for (let i = 1; i < n; i++) {
        if (s[i] === '(') {
            dp[i] = 0
        } else {
            if (s[i - 1] === '(') {
                dp[i] = (i - 2 >= 0 ? dp[i - 2] : 0) + 2
            } else if (s[i - dp[i - 1] - 1] === '(') {
                dp[i] =
                    i - dp[i - 1] - 2 >= 0
                        ? dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
                        : dp[i - 1] + 2
            }
        }
        max = Math.max(dp[i], max)
    }
    return max
}

//栈
function longestValidParentheses_stack(s: string): number {
    const n = s.length
    let max = 0
    const stack: number[] = [-1]
    for (let i = 0; i < n; i++) {
        if (i === 0 || s[i] === '(' || s[stack[stack.length - 1]] !== '(') {
            stack.push(i)
        } else {
            stack.pop()
            max = Math.max(max, i - stack[stack.length - 1])
        }
    }
    return max
}
