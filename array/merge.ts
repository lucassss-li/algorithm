//56. 合并区间
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    const res: number[][] = []
    let start = -1
    let end = -1
    for (let i = 0; i < intervals.length; i++) {
        const [_start, _end] = intervals[i]
        if (start === -1 && end === -1) {
            start = _start
            end = _end
        } else {
            if (_start <= end) {
                end = Math.max(_end, end)
            } else {
                res.push([start, end])
                start = _start
                end = _end
            }
        }
    }
    res.push([start, end])
    return res
}
