// 6. Z 字形变换

function convert(s: string, numRows: number): string {
    if (numRows === 1) return s
    let ans = ''
    for (let i = 0; i < numRows; i++) {
        let index = i
        while (index < s.length) {
            if (i === 0 || i === numRows - 1) {
                ans += s[index]
            } else {
                ans += s[index]
                const j = index + 2 * (numRows - 1) - 2 * i
                if (j < s.length) {
                    ans += s[j]
                }
            }
            index += 2 * (numRows - 1)
        }
    }
    return ans
}
