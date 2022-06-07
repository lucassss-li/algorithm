// 90. 子集 II

function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const ans: number[][] = []
    const visited = new Set<string>()
    process([], 0)
    function process(path: number[], index: number) {
        const _path = path.join('&')
        if (visited.has(_path)) return
        visited.add(_path)
        ans.push([...path])
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            process(path, i + 1)
            path.pop()
        }
    }
    return ans
}
