// 131. 分割回文串

function partition(s: string): string[][] {
    const ans: string[][] = []
    process([], 0)
    function process(path: string[], index: number) {
        if (index >= s.length) {
            ans.push([...path])
            return
        }
        for (let i = index; i < s.length; i++) {
            const subStr = s.slice(index, i + 1)
            if (checkPartition(subStr)) {
                path.push(subStr)
                process(path, i + 1)
                path.pop()
            }
        }
    }
    function checkPartition(s: string): boolean {
        return s === [...s].reverse().join('')
    }
    return ans
}
