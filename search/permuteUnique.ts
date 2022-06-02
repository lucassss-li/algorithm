// 47. 全排列 II

function permuteUnique(nums: number[]): number[][] {
    const ans: number[][] = []
    const remain = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const n = remain.get(num)
        if (n) {
            remain.set(num, n + 1)
        } else {
            remain.set(num, 1)
        }
    }
    process([], remain)
    function process(path: number[], remain: Map<number, number>) {
        if (path.length === nums.length) {
            ans.push([...path])
            return
        }
        for (const [num, n] of [...remain.entries()]) {
            if (n) {
                path.push(num)
                remain.set(num, n - 1)
                process(path, remain)
                path.pop()
                remain.set(num, n)
            }
        }
    }
    return ans
}
