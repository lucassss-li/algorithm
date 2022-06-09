// 413. 等差数列划分

function numberOfArithmeticSlices(nums: number[]): number {
    if (nums.length < 3) return 0
    const n = nums.length
    const visited = new Set()
    let ans = 0
    for (let i = 0; i < n; i++) {
        let start = i
        if (visited.has(start)) continue
        visited.add(start)
        for (let j = start + 1; j < n; j++) {
            if (
                j - 2 < start ||
                nums[j] - nums[j - 1] === nums[j - 1] - nums[j - 2]
            ) {
                if (j - start >= 2) {
                    ans++
                }
            } else {
                start = j
                if (visited.has(start)) break
                visited.add(start)
            }
        }
    }
    return ans
}
