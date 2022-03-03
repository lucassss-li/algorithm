function shellSort(source: number[]) {
    if (!source || source.length === 1) return
    for (let a = Math.floor(source.length / 2); a > 0; a = Math.floor(a / 2)) {
        for (let i = 0; i < source.length - a; i++) {
            let temp = source[i + a]
            for (let k = i; k >= 0; k -= a) {
                if (temp > source[k]) {
                    source[k + a] = temp
                    break
                } else {
                    source[k + a] = source[k]
                    if (k - a < 0) {
                        source[k] = temp
                    }
                }
            }
        }
    }
}
export { shellSort }
