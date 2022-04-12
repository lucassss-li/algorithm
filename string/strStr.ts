// 28. 实现 strStr()

function strStr(haystack: string, needle: string): number {
    const PMT = getPMT(needle)
    let i = 0
    let j = 0
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j] || j === -1) {
            i++
            j++
        } else {
            j = PMT[j]
        }
    }
    if (i <= haystack.length && j === needle.length) {
        return i - j
    } else {
        return -1
    }
    function getPMT(target: string): number[] {
        const PMT: number[] = [0]
        let length = 0
        let i = 1
        while (i < target.length) {
            if (target[length] === target[i]) {
                PMT[i++] = ++length
            } else {
                if (length - 1 >= 0) {
                    length = PMT[length - 1]
                } else {
                    PMT[i++] = 0
                }
            }
        }
        PMT.unshift(-1)
        return PMT.slice(0, PMT.length - 1)
    }
}