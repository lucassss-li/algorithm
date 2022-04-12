// 22. 括号生成
function generateParenthesis(n: number): string[] {
    const ans: string[] = []
    process([], n, n)
    function process(data: string[], l: number, r: number) {
        if (l === 0 && r === 0) {
            ans.push(data.join(''))
            return
        }
        if (l > 0) {
            data.push('(')
            process(data, l - 1, r)
            data.pop()
        }
        if (r > l) {
            data.push(')')
            process(data, l, r - 1)
            data.pop()
        }
    }
    return ans
}
