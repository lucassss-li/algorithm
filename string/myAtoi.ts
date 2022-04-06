// 8. 字符串转换整数 (atoi)

function myAtoi(s: string): number {
    let flag = true
    let start = false
    let ans = ''
    for (let i = 0; i < s.length; i++) {
        if (
            (start && !/\d/.test(s[i])) ||
            (ans.length === 10 && +ans[0] >= 2 && +ans[1] > 1)
        ) {
            break
        }
        if (!start && /\d/.test(s[i])) {
            start = true
            ans += s[i]
            continue
        }
        if (!start && (s[i] === '+' || s[i] === '-')) {
            start = true
            flag = s[i] === '+'
            continue
        }
        if (!start && /[^\d+-\s]/.test(s[i])) {
            break
        }
        if (start) {
            ans += s[i]
        }
    }
    let num = 0
    for (let i = ans.length - 1; i > 0; i--) {
        num += +ans[i] * 10 ** (ans.length - i - 1)
    }
    num = flag ? num : -num
    if (num > 2147483647) {
        return 2147483647
    }
    if (num < -2147483648) {
        return -2147483648
    }
    return num
}
