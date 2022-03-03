function countSort(arr: number[]) {
    let { max, min } = find(arr)
    let countArr = Array(max - min + 1).fill(0)
    let result = []
    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i] - min] += 1
    }
    for (let i = 0; i < countArr.length; i++) {
        let total = countArr[i]
        while (total > 0) {
            result.push(i + min)
            total--
        }
    }

    return result
    function find(arr: number[]) {
        let min = arr[0]
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i]
            if (arr[i] < min) min = arr[i]
        }
        return { max, min }
    }
}
export { countSort }
