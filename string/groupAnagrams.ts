// 49. 字母异位词分组

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()
    const flag = Array(26).fill(0)
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            const charCode = strs[i][j].charCodeAt(0) - 97
            flag[charCode]++
        }
        const key = flag.join('#')
        const arr = map.get(key)
        if (arr) {
            arr.push(strs[i])
        } else {
            map.set(key, [strs[i]])
        }
        flag.fill(0)
    }
    return [...map.values()]
}