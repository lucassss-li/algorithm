// 14. 最长公共前缀
function longestCommonPrefix(strs: string[]): string {
    let ans = [...strs[0]]
    for (let i = 1; i < strs.length; i++) {
        let j = 0
        for (; j < strs[i].length; j++) {
            if (j >= ans.length || ans[j] !== strs[i][j]) {
                break
            }
        }
        ans = ans.slice(0, j)
    }
    return ans.join('')
}
