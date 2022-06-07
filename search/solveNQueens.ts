// 51. N 皇后

function solveNQueens(n: number): string[][] {
    const ans: string[][] = []
    process([])
    function process(path: number[]) {
        if (path.length >= n) {
            ans.push(
                path.map(num => {
                    const arr = Array(n).fill('.')
                    arr[num] = 'Q'
                    return arr.join('')
                })
            )
            return
        }
        for (let i = 0; i < n; i++) {
            if (check(path, i)) {
                path.push(i)
                process(path)
                path.pop()
            }
        }
    }
    function check(path: number[], target: number): boolean {
        for (let i = 0; i < path.length; i++) {
            if (
                path[i] === target ||
                Math.abs(path[i] - target) === Math.abs(i - path.length)
            ) {
                return false
            }
        }
        return true
    }
    return ans
}
