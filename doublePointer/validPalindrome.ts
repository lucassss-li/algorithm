// 680. 验证回文字符串 Ⅱ

function validPalindrome(s: string): boolean {
    return process(0, s.length - 1, false)
    function process(i: number, j: number, flag: boolean): boolean {
        while (i < j) {
            if (s[i] !== s[j]) {
                if (flag) {
                    return false
                } else {
                    return process(i + 1, j, true) || process(i, j - 1, true)
                }
            } else {
                i++
                j--
            }
        }
        return true
    }
}
