function bestRotation(nums: number[]): number {
    //差分数组
    const c: number[] = Array(nums.length + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        if (i >= nums[i]) {
            add(0, i - nums[i])
            add(i + 1, nums.length)
        } else {
            add(i + 1, nums.length - (nums[i] - i))
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        c[i] += c[i - 1]
    }
    let ans = 0
    let k = c[0]
    for (let i = 1; i <= nums.length; i++) {
        if (c[i] > k) {
            k = c[i]
            ans = i
        }
    }

    return ans
    function add(l: number, r: number) {
        c[l] += 1
        c[r + 1] -= 1
    }
}

export default { bestRotation }
