// 88. 合并两个有序数组

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0
    let j = 0
    let index = 0
    const arr: number[] = []
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            arr[index++] = nums1[i++]
        } else {
            arr[index++] = nums2[j++]
        }
    }
    while (i < m) {
        arr[index++] = nums1[i++]
    }
    while (j < n) {
        arr[index++] = nums2[j++]
    }
    for (let i = 0; i < index; i++) {
        nums1[i] = arr[i]
    }
}
