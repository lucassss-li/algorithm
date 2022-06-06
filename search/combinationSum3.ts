// 216 组合总和 III

function combinationSum3(k: number, n: number): number[][] {
    const ans: number[][] = []
    process([], 0, 1)
    function process(path: number[], sum: number, index: number) {
        if (index > 9 || path.length >= k) {
            return
        }
        for (let i = index; i <= 9; i++) {
            const _sum = sum + i
            if (_sum === n) {
                if (path.length + 1 === k) {
                    ans.push([...path, i])
                }
                continue
            } else if (_sum < n) {
                path.push(i)
                process(path, _sum, i + 1)
                path.pop()
            } else {
                continue
            }
        }
    }
    return ans
}
