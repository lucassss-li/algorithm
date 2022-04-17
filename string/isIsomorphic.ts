// 205. 同构字符串

function isIsomorphic(s: string, t: string): boolean {
    const s2t = new Map()
    const t2s = new Map()
    for (let i = 0; i < s.length; i++) {
        const s_c = s[i]
        const t_c = t[i]
        if (s2t.has(s_c)) {
            if (s2t.get(s_c) !== t_c || t2s.get(t_c) !== s_c) {
                return false
            }
        } else if (t2s.has(t_c)) {
            return false
        } else {
            s2t.set(s_c, t_c)
            t2s.set(t_c, s_c)
        }
    }
    return true
}