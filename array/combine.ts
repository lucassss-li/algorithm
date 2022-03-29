// 77. 组合

function combine(n: number, k: number): number[][] {
    const ans: number[][] = []
    process([], 1)
    function process(data: number[], num: number) {
        if (num > n) {
            return
        }
        data.push(num)
        if (data.length === k) {
            ans.push([...data])
        }
        process(data, num + 1)
        data.pop()
        process(data, num + 1)
    }
    return ans
}
