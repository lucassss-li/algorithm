// 46. 全排列

function permute(nums: number[]): number[][] {
    const ans: number[][] = []
    process([], new Set(nums))
    function process(path: number[], remain: Set<number>) {
        if (remain.size === 0) {
            ans.push([...path])
            return
        }
        for (const num of [...remain.values()]) {
            path.push(num)
            remain.delete(num)
            process(path, remain)
            path.pop()
            remain.add(num)
        }
    }
    return ans
}
