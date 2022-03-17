function manacher(str: string) {
    let max = -Infinity
    str = `#${[...str].join('#')}#`
    const pArr: number[] = []
    let R: number = -1
    let C: number = -1
    for (let i = 0; i < str.length; i++) {
        pArr[i] = i < R ? Math.min(pArr[2 * C - i], R - i) : 1
        while (i + pArr[i] < str.length && i - pArr[i] > -1) {
            if (str[i + pArr[i]] === str[i - pArr[i]]) {
                pArr[i]++
            } else {
                break
            }
        }
        if (i + pArr[i] > R) {
            R = i + pArr[i]
            C = i
        }
        max = Math.max(max, pArr[i])
    }
    return max - 1
}

export { manacher }
