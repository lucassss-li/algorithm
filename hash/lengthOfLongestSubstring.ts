// 3. 无重复字符的最长子串

function lengthOfLongestSubstring(s: string): number {
    const map = new Map()
    let i = -1
    let j = 0
    let max = 0
    while (j < s.length) {
        if (map.has(s[j]) && map.get(s[j]) >= i) {
            i = map.get(s[j])
        }
        map.set(s[j], j)
        max = Math.max(max, j - i)
        j++
    }
    return max
}
