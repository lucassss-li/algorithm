// 76. 最小覆盖子串

function minWindow(s: string, t: string): string {
    const targetMap = new Map()
    const map = new Map()
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], 0)
        if (targetMap.has(t[i])) {
            targetMap.set(t[i], targetMap.get(t[i]) + 1)
        } else {
            targetMap.set(t[i], 1)
        }
    }
    let i = 0
    let j = 0
    let min = Infinity
    let ans = [i, j]
    while (j < s.length) {
        const key = s[j]
        if (targetMap.has(key)) {
            map.set(key, map.get(key) + 1)
        }
        while (i <= j) {
            if (targetMap.has(s[i])) {
                if (targetMap.get(s[i]) < map.get(s[i])) {
                    map.set(s[i], map.get(s[i]) - 1)
                    i++
                } else {
                    break
                }
            } else {
                i++
            }
        }
        j++
        if (check() && min > j - i) {
            min = j - i
            ans = [i, j]
        }
    }
    return s.slice(ans[0], ans[1])
    function check() {
        for (const [key, val] of targetMap.entries()) {
            if (val > map.get(key)) {
                return false
            }
        }
        return true
    }
}