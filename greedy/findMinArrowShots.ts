// 452. 用最少数量的箭引爆气球

function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1])
    let ans = 0
    let i = 0
    while (i < points.length) {
        const end = points[i][1]
        let j = i + 1
        for (; j < points.length; j++) {
            if (points[j][0] > end) {
                break
            }
        }
        ans++
        i = j
    }
    return ans
}
