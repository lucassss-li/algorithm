//440. 字典序的第K小数字
//字典树
function findKthNumber(n: number, k: number): number {
    let cur = 1
    k--
    while (k > 0) {
        const step = getStep(cur, n)
        if (k >= step) {
            k -= step
            cur++
        } else {
            cur = cur * 10
            k--
        }
    }
    function getStep(cur: number, n: number): number {
        let steps = 0
        let first = cur
        let last = cur
        while (first <= n) {
            steps += Math.min(last, n) - first + 1
            first = first * 10
            last = last * 10 + 9
        }
        return steps
    }
    return cur
}
