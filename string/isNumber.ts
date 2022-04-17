// 65. 有效数字

function isNumber(s: string): boolean {
    const n = s.length
    let flag = 0
    let e = -1
    for (let i = 0; i < n; i++) {
        if (!/[0-9+-.eE]/.test(s[i])) {
            return false
        }
        if ((s[i] === '+' || s[i] === '-') && i !== e + 1) {
            return false
        }
        if (s[i] === '.') {
            if (flag >= 1) {
                return false
            } else {
                flag = 1
            }
        }
        if (s[i] === 'e' || s[i] === 'E') {
            if (
                flag === 2 ||
                i === 0 ||
                (i === 1 && (s[i - 1] === '-' || s[i - 1] === '+')) ||
                (flag === 1 &&
                    s[i - 1] === '.' &&
                    (i - 2 < 0 || !/[0-9]/.test(s[i - 2])))
            ) {
                return false
            } else {
                flag = 2
                e = i
            }
        }
    }
    if (
        s[n - 1] === 'e' ||
        s[n - 1] === 'E' ||
        s[n - 1] === '+' ||
        s[n - 1] === '-'
    ) {
        return false
    }
    if (s[n - 1] === '.') {
        if (n - 2 < 0 || !/[0-9]/.test(s[n - 2])) {
            return false
        }
    }
    return true
}