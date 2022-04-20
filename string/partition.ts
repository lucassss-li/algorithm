// 131. 分割回文串

function partition(s: string): string[][] {
    const ans: string[][] = []
    process([], 0)
    function process(data: string[], index: number) {
        if (index === s.length) {
            ans.push([...data])
            return
        }
        for (let i = index + 1; i <= s.length; i++) {
            const str = s.slice(index, i)
            if (check(str)) {
                data.push(str)
                process(data, i)
                data.pop()
            }
        }
    }
    return ans
    function check(str: string): boolean {
        let i = 0
        let j = str.length - 1
        if (str.length & 1) {
            const mid = (i + j) >> 1
            while (i < mid && j > mid) {
                if (str[i++] !== str[j--]) {
                    return false
                }
            }
        } else {
            while (i < j) {
                if (str[i++] !== str[j--]) {
                    return false
                }
            }
        }
        return true
    }
}
