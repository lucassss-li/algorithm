//51. N 皇后

function solveNQueens(n: number): string[][] {
    const ans: string[][] = []
    process([], 0)
    function process(cur: number[], k: number) {
        if (k >= n) {
            ans.push(
                cur.map(item => {
                    const arr = Array(n).fill('.')
                    arr[item] = 'Q'
                    return arr.join('')
                })
            )
        }
        for (let i = 0; i < n; i++) {
            if (isValid(cur, k, i)) {
                cur[k] = i
                process(cur, k + 1)
            }
        }
    }
    function isValid(data: number[], k: number, target: number): boolean {
        for (let i = 0; i < k; i++) {
            if (data[i] === target) {
                return false
            }
            if (Math.abs(i - k) === Math.abs(target - data[i])) {
                return false
            }
        }
        return true
    }
    return ans
}

const res = solveNQueens(1)

console.log(res)
