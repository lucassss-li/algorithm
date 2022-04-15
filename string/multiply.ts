// 43. 字符串相乘

function multiply(num1: string, num2: string): string {
    let ans = ''
    for (let i = num1.length - 1; i >= 0; i--) {
        let count = ''
        for (let j = num2.length - 1; j >= 0; j--) {
            const n = num1.length - 1 - i + (num2.length - 1 - j)
            const c = parseInt(num1[i]) * parseInt(num2[j])
            count = add(count, c + (c > 0 ? Array(n).fill(0).join('') : ''))
        }
        ans = add(ans, count)
    }
    return ans
    function add(num1: string, num2: string): string {
        let ans = ''
        let flag = false
        let i = num1.length - 1
        let j = num2.length - 1
        while (i >= 0 && j >= 0) {
            const n: number =
                parseInt(num1[i--]) + parseInt(num2[j--]) + (flag ? 1 : 0)
            flag = n > 9
            ans = (n % 10) + ans
        }
        while (i >= 0) {
            const n: number = parseInt(num1[i--]) + (flag ? 1 : 0)
            flag = n > 9
            ans = (n % 10) + ans
        }
        while (j >= 0) {
            const n: number = parseInt(num2[j--]) + (flag ? 1 : 0)
            flag = n > 9
            ans = (n % 10) + ans
        }
        return (flag ? 1 : '') + ans
    }
}
