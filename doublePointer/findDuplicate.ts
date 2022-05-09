// 287. 寻找重复数

//使用数值的正负来表示对应索引值是否出现过
function findDuplicate1(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            return Math.abs(nums[i])
        } else {
            nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1]
        }
    }
    return -1
}

//双指针、链表入环点
function findDuplicate(nums: number[]): number {
    let i = 0
    let j = 0
    let flag = false
    // eslint-disable-next-line
    while (true) {
        i = nums[i]
        j = nums[j]
        !flag && (j = nums[j])
        if (i === j) {
            if (!flag) {
                j = 0
                flag = true
            } else {
                return i
            }
        }
    }
}
