// 187. 重复的DNA序列

function findRepeatedDnaSequences(s: string): string[] {
    const map = new Map<string, Array<[number, number]>>()
    for (let i = 10; i <= s.length; i++) {
        const j = i - 10
        const str = s.slice(j, i)
        if (map.has(str)) {
            const arr = map.get(str) as Array<[number, number]>
            arr.push([j, i - 1])
        } else {
            map.set(str, [[j, i - 1]])
        }
    }
    const ans = []
    for (const [key, arr] of map.entries()) {
        if (arr.length > 1) {
            ans.push(key)
        }
    }
    return ans
}