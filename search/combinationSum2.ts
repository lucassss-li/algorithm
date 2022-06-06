// 40. 组合总和 II

function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b)
    const ans: number[][] = []
    const visited: Set<string> = new Set()
    process([], 0, 0)
    function process(path: number[], index: number, sum: number): void {
        if (index >= candidates.length) return
        for (let i = index; i < candidates.length; i++) {
            const _path = [...path, candidates[i]].join('&')
            if (visited.has(_path)) {
                continue
            } else {
                visited.add(_path)
            }
            const _sum = sum + candidates[i]
            if (_sum === target) {
                ans.push([...path, candidates[i]])
                continue
            } else if (_sum < target) {
                path.push(candidates[i])
                process(path, i + 1, sum + candidates[i])
                path.pop()
            } else {
                continue
            }
        }
    }
    return ans
}
