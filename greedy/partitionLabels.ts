// 763. 划分字母区间

function partitionLabels(s: string): number[] {
    const sd = new Map<string, [number, number]>()
    for (let i = 0; i < s.length; i++) {
        let temp = sd.get(s[i])
        if (temp) {
            temp[1] = i
        } else {
            temp = [i, i]
        }
        sd.set(s[i], temp)
    }
    const arr = [...sd.values()]
    const ans: number[] = []
    let i = 0
    while (i < arr.length) {
        const start = arr[i][0]
        let end = arr[i][1]
        let j = i + 1
        for (; j < arr.length; j++) {
            if (arr[j][0] <= end) {
                end = Math.max(arr[j][1], end)
            } else {
                break
            }
        }
        i = j
        ans.push(end - start + 1)
    }
    return ans
}
