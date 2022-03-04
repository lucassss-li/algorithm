function solveNQueens(n: number): string[][] {
    const res: number[][] = []
    process([], 0)
    return res.map(record =>
        record.map(item => {
            const arr = Array(n).fill('.')
            arr[item] = 'Q'
            return arr.join('')
        })
    )

    function process(record: number[], i: number) {
        if (i === n) {
            res.push(Array.from(record))
        }
        let target = 0
        while (target < n) {
            if (isValid(record, i, target)) {
                record[i] = target
                process(record, i + 1)
            }
            target++
        }
    }

    function isValid(record: number[], i: number, target: number): boolean {
        let index = 0
        while (index < i) {
            if (record[index] === target) {
                return false
            }
            if (Math.abs(+index - i) === Math.abs(target - record[index])) {
                return false
            }
            index++
        }
        return true
    }
}

export { solveNQueens }
