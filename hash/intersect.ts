// 350. 两个数组的交集 II

function intersect(nums1: number[], nums2: number[]): number[] {
    const map1 = createMap(nums1)
    const map2 = createMap(nums2)
    const ans: number[] = []
    for (const [num, n1] of map1.entries()) {
        if (map2.has(num)) {
            const n2 = <number>map2.get(num)
            const min = Math.min(n1, n2)
            ans.push(...Array(min).fill(num))
        }
    }
    return ans
    function createMap(arr: number[]): Map<number, number> {
        const map = new Map()
        for (let i = 0; i < arr.length; i++) {
            const num = arr[i]
            const n = map.get(num)
            if (n) {
                map.set(num, n + 1)
            } else {
                map.set(num, 1)
            }
        }
        return map
    }
}
