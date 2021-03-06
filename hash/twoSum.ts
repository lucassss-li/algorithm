// 1. 两数之和

//哈希表解法
function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i]
        } else {
            map.set(target - nums[i], i)
        }
    }
    return []
}
