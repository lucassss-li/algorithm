// 58. 最后一个单词的长度

function lengthOfLastWord(s: string): number {
    let i = s.length - 1
    let j = s.length - 1
    while (j >= 0) {
        if (i === j && s[i] === ' ') {
            j--
            i--
        } else if (s[j] === ' ') {
            break
        } else {
            j--
        }
    }
    return i - j
}