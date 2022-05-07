// 350. 两个数组的交集 II

function intersect(nums1: number[], nums2: number[]): number[] {
    const ans: number[] = []
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let r1 = 0
    let r2 = 0
    while (r1 < nums1.length && r2 < nums2.length) {
        if (nums1[r1] === nums2[r2]) {
            ans.push(nums1[r1])
            r1++
            r2++
        } else if (nums1[r1] > nums2[r2]) {
            r2++
        } else {
            r1++
        }
    }
    return ans
}
