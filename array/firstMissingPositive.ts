//  41. 缺失的第一个正数

// 原地哈希：使用数组内的对应下标的正负性来表示与下标相同的值的是否在数组中
// eg:如果nums[3]的值为负则表示nums数组中存在3这个值

function firstMissingPositive(nums: number[]): number {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1
        }
    }
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i])
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1])
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1
        }
    }
    return n + 1
}
