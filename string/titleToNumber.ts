// 171. Excel 表列序号

function titleToNumber(columnTitle: string): number {
    let ans = 0
    const l = columnTitle.length
    for (let i = l - 1; i >= 0; i--) {
        ans += (columnTitle[i].charCodeAt(0) - 64) * 26 ** (l - i - 1)
    }
    return ans
}
