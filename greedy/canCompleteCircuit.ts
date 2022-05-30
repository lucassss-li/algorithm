// 134. 加油站

function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length
    let remain = 0
    const cache: number[] = Array(n).fill(-1)
    for (let i = 0; i < n; i++) {
        let pre = i
        let j = next(i)
        remain = gas[i]
        while (j !== i) {
            if (cache[pre] === -1) {
                cache[pre] = remain
            } else {
                if (remain <= cache[pre]) {
                    break
                } else {
                    cache[pre] = remain
                }
            }
            if (remain >= cost[pre]) {
                remain = remain - cost[pre] + gas[j]
            } else {
                break
            }
            pre = j
            j = next(j)
        }
        if (j === i && remain >= cost[pre]) return i
    }
    return -1
    function next(i: number) {
        return (i + 1) % n
    }
}
