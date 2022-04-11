// 13. 罗马数字转整数

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInt(s: string): number {
    const map: {
        [key: string]: number
    } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let ans = 0
    let preMax = 0
    for (let i = s.length - 1; i >= 0; i--) {
        const cur = map[s[i]]
        if (preMax > cur) {
            ans -= cur
        } else {
            ans += cur
            preMax = cur
        }
    }
    return ans
}
