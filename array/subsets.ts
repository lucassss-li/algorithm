// 78. 子集

function subsets(nums: number[]): number[][] {
    const ans: number[][] = []
    let w = 0
    for (let i = 0; i < nums.length; i++) {
        w += 2 ** i
    }
    for (let i = 0; i <= w; i++) {
        const data: number[] = []
        for (let j = 0; j < 10; j++) {
            if (i & (2 ** j)) {
                data.push(nums[j])
            }
        }
        ans.push(data)
    }
    return ans
}
