function selectSort(source: number[]) {
    for (let i = 0; i < source.length; i++) {
        let index = i
        for (let j = i + 1; j < source.length; j++) {
            if (source[index] > source[j]) {
                index = j
            }
        }
        let temp = source[index]
        source[index] = source[i]
        source[i] = temp
    }
}
export { selectSort }