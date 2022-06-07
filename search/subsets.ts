// 78. 子集

function subsets(nums: number[]): number[][] {
    const ans: number[][] = [[]]
    process([], 0)
    function process(path: number[], index: number) {
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            ans.push([...path])
            process(path, i + 1)
            path.pop()
        }
    }
    return ans
}
