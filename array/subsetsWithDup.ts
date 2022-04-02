// 90. 子集 II

function subsetsWithDup(nums: number[]) {
    nums.sort((a, b) => a - b)
    const ans: number[][] = []
    const n = nums.length
    let arr: number[] = []
    for (let i = 0; i < 1 << n; i++) {
        let flag = true
        arr = []
        for (let j = 0; j < n; j++) {
            if (((1 << j) & i) !== 0) {
                if (
                    j > 0 &&
                    ((1 << (j - 1)) & i) === 0 &&
                    nums[j] === nums[j - 1]
                ) {
                    flag = false
                    break
                } else {
                    arr.push(nums[j])
                }
            }
        }
        if (flag) {
            ans.push(arr)
        }
    }
    return ans
}
