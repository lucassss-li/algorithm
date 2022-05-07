// 275. H 指数 II

function hIndex(citations: number[]): number {
    const total = citations.length
    let i = -1
    let j = total
    while (j - i > 1) {
        const mid = i + Math.floor((j - i) / 2)
        const n = total - mid
        if (citations[mid] >= n) {
            j = mid
        } else {
            i = mid
        }
    }
    return total - j
}
