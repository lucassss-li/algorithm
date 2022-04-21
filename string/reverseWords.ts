// 151. 颠倒字符串中的单词

function reverseWords(s: string): string {
    let ans = ''
    let i = 0
    let cur = ''
    while (i < s.length) {
        if (s[i] === ' ' && s[i - 1] === ' ') {
            i++
            continue
        } else if (s[i] === ' ') {
            ans = cur + (ans ? ` ${ans}` : ans)
            cur = ''
        } else {
            cur += s[i]
        }
        i++
    }
    return cur + (cur && ans ? ' ' : '') + ans
}
