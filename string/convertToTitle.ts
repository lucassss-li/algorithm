// 168. Excel表列名称

function convertToTitle(columnNumber: number): string {
    let ans = ''
    while (columnNumber > 0) {
        columnNumber--
        const n = columnNumber % 26
        ans = String.fromCharCode(n + 65) + ans
        columnNumber = (columnNumber - n) / 26
    }
    return ans
}
