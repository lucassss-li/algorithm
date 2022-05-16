// 435. 无重叠区间

function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1])
    const L = intervals.length
    let n = 0
    let pre = -Infinity
    for (let i = 0; i < L; i++) {
        if (intervals[i][0] >= pre) {
            n++
            pre = intervals[i][1]
        }
    }
    return L - n
}
