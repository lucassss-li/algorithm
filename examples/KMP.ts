function KMP(source: string, target: string) {
    const PMT = findPMT(target)
    let i = 0
    let j = 0
    while (i < source.length && j < target.length) {
        if (source[i] === target[j] || j === -1) {
            i++
            j++
        } else {
            j = PMT[j]
        }
    }
    return j === target.length ? i - target.length : -1
    function findPMT(str: string): number[] {
        const chars: string[] = [...str]
        const res: number[] = [0]
        let length: number = 0
        for (let i = 1; i < chars.length; i++) {
            while (true) {
                if (chars[i] === chars[length]) {
                    length++
                    res[i] = length
                    break
                } else {
                    if (length - 1 < 0) {
                        res[i] = length
                        break
                    }
                    length = res[length - 1]
                }
            }
        }
        res.unshift(-1)
        res.splice(-1, 1)
        return res
    }
}

export { KMP }
