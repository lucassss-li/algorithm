// 125. 验证回文串

function isPalindrome(s: string): boolean {
    s = s.replace(/[^\da-zA-Z]/g, '')
    if (s === '') return true
    let i = 0
    let j = s.length - 1
    while (i < j) {
        if (!new RegExp(s[i++], 'i').test(s[j--])) {
            return false
        }
    }
    return true
}
