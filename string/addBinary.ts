// 67. 二进制求和

function addBinary(a: string, b: string): string {
    let ans = ''
    let i = a.length - 1
    let j = b.length - 1
    let flag = false
    while (i >= 0 && j >= 0) {
        if (a[i] === b[j]) {
            ans = (flag ? '1' : '0') + ans
            flag = a[i] === '1'
        } else {
            ans = (flag ? '0' : '1') + ans
        }
        i--
        j--
    }
    while (i >= 0) {
        if (a[i] === '1') {
            ans = (flag ? '0' : '1') + ans
        } else {
            ans = (flag ? '1' : '0') + ans
            flag = false
        }
        i--
    }
    while (j >= 0) {
        if (b[j] === '1') {
            ans = (flag ? '0' : '1') + ans
        } else {
            ans = (flag ? '1' : '0') + ans
            flag = false
        }
        j--
    }
    return flag ? '1' + ans : ans
}