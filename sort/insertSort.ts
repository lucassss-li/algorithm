function insertSort(source: number[]) {
    if (!source || source.length === 1) return
    for (let i = 0; i < source.length - 1; i++) {
        let temp = source[i + 1]
        for (let k = i; k >= 0; k--) {
            if (temp > source[k]) {
                source[k + 1] = temp
                break
            } else {
                source[k + 1] = source[k]
                if (k === 0) {
                    source[0] = temp
                }
            }
        }
    }
}
export { insertSort }
