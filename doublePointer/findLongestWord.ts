// 524. 通过删除字母匹配到字典里最长单词

function findLongestWord(s: string, dictionary: string[]): string {
    let ans = ''
    for (let i = 0; i < dictionary.length; i++) {
        const str = dictionary[i]
        if (isValidate(s, str)) {
            if (str.length > ans.length) {
                ans = str
            }
            if (str.length === ans.length && str.localeCompare(ans) < 0) {
                ans = str
            }
        }
    }
    return ans
    function isValidate(target: string, source: string): boolean {
        let i = 0
        let j = 0
        while (i < target.length && j < target.length) {
            if (target[i] === source[j]) {
                i++
                j++
            } else {
                i++
            }
        }
        return j === source.length
    }
}
