// 303. 区域和检索 - 数组不可变

class NumArray {
    cache: number[] = []
    constructor(nums: number[]) {
        const n = nums.length
        for (let i = 0; i < n; i++) {
            this.cache[i] = nums[i] + (i - 1 >= 0 ? this.cache[i - 1] : 0)
        }
    }
    sumRange(left: number, right: number): number {
        return this.cache[right] - (left - 1 >= 0 ? this.cache[left - 1] : 0)
    }
}
