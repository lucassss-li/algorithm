// 93. 复原 IP 地址

function restoreIpAddresses(s: string): string[] {
    const ans = new Set<string>()
    const IP: string[][] = Array(4)
        .fill(0)
        .map(() => [])
    process(0, 0)
    function process(i: number, j: number) {
        if (i === s.length && j === 4) {
            ans.add(
                IP.reduce((total: string[], item): string[] => {
                    total.push(item.join(''))
                    return total
                }, []).join('.')
            )
            return
        }
        if (i >= s.length || j >= 4) {
            return
        }
        if (i === s.length && j < 4) {
            return
        }
        IP[j].push(s[i])
        if (validate(IP[j])) {
            process(i + 1, j)
            process(i + 1, j + 1)
            IP[j].pop()
        } else {
            IP[j].pop()
            process(i, j + 1)
        }
    }
    function validate(arr: string[]): boolean {
        if (arr.length > 1 && arr[0] === '0') {
            return false
        }
        const num = +arr.join('')
        if (num > 255) {
            return false
        }
        return true
    }
    return [...ans.values()]
}