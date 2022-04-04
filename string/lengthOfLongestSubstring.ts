// 3. 无重复字符的最长子串

function lengthOfLongestSubstring(s: string): number {
    const n = s.length
    let ans = 0
    let j = -1
    const map = new Map()
    for (let i = 0; i < n; i++) {
        if (map.has(s[i]) && map.get(s[i]) > j) {
            j = map.get(s[i])
        }
        ans = Math.max(ans, i - j)
        map.set(s[i], i)
    }
    return ans
}