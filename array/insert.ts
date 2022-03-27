// 57. 插入区间
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let min = newInterval[0]
    let max = newInterval[1]
    const remain: number[][] = []
    for (let i = 0; i < intervals.length; i++) {
        const [left, right] = intervals[i]
        if (
            (left <= newInterval[0] && newInterval[0] <= right) ||
            (left <= newInterval[1] && newInterval[1] <= right) ||
            (left <= newInterval[0] && newInterval[1] <= right) ||
            (left >= newInterval[0] && newInterval[1] >= right)
        ) {
            max = Math.max(max, right)
            min = Math.min(min, left)
        } else {
            remain.push(intervals[i])
        }
    }
    remain.push([min, max])
    remain.sort((a, b) => a[0] - b[0])
    return remain
}
