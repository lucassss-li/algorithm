// 165. 比较版本号

function compareVersion(version1: string, version2: string): number {
    const v1_arr = version1.split('.')
    const v2_arr = version2.split('.')
    const l1 = v1_arr.length
    const l2 = v2_arr.length
    const l = Math.max(l1, l2)
    let i = 0
    while (i < l) {
        const s1 = i < l1 ? v1_arr[i] : '0'
        const s2 = i < l2 ? v2_arr[i] : '0'
        const flag = check(s1, s2)
        if (flag !== 0) {
            return flag
        }
        i++
    }
    return 0
    function check(s1: string, s2: string): -1 | 0 | 1 {
        const n1 = parseInt(s1)
        const n2 = parseInt(s2)
        return n1 === n2 ? 0 : n1 > n2 ? 1 : -1
    }
}
