function bubbleSort(source: number[]) {
    for (let i = source.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (source[j] > source[j + 1]) {
                let temp = source[j]
                source[j] = source[j + 1]
                source[j + 1] = temp
            }
        }
    }
}

export { bubbleSort }
