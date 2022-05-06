// 436. 寻找右区间

function findRightInterval(intervals: number[][]): number[] {
    const map = new Map<number[], number>()
    for (let i = 0; i < intervals.length; i++) {
        map.set(intervals[i], i)
    }
    const data = [...intervals]
    data.sort((a, b) => a[0] - b[0])
    const ans: number[] = []
    for (let i = 0; i < intervals.length; i++) {
        ans.push(search(data, intervals[i]))
    }
    return ans

    function search(data: number[][], target: number[]): number {
        let i = -1
        let j = data.length
        while (j - i > 1) {
            const mid = i + Math.floor((j - i) / 2)
            if (data[mid][0] < target[1]) {
                i = mid
            } else {
                j = mid
            }
        }
        if (j < data.length) {
            return <number>map.get(data[j])
        } else {
            return -1
        }
    }
}
