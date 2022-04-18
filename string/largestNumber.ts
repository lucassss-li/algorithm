// 179. 最大数

function largestNumber(nums: number[]): string {
    function compare(a: number, b: number): number {
        if (a === b) return 0
        const a_b = '' + a + b
        const b_a = '' + b + a
        return parseInt(a_b) > parseInt(b_a) ? -1 : 1
    }
    nums.sort((a, b) => compare(a, b))
    let i = -1
    for (; i < nums.length - 1; i++) {
        if (nums[i + 1] !== 0) {
            break
        }
    }
    return i === -1 ? nums.join('') : nums.slice(i).join('')
}
