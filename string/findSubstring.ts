// 30. 串联所有单词的子串

function findSubstring(s: string, words: string[]): number[] {
    const ans: number[] = []
    const length = words.join('').length
    const wordMap = new Map()
    const subStrMap = new Map()
    for (let i = 0; i < words.length; i++) {
        if (wordMap.has(words[i])) {
            wordMap.set(words[i], wordMap.get(words[i]) + 1)
        } else {
            wordMap.set(words[i], 1)
        }
    }
    out: for (let i = 0; i <= s.length - length; i++) {
        const subStr = s.slice(i, i + length)
        for (const key of wordMap.keys()) {
            let k = 0
            while (k < length) {
                const str = subStr.slice(k, k + key.length)
                if (str === key) {
                    if (subStrMap.has(str)) {
                        subStrMap.set(str, subStrMap.get(str) + 1)
                    } else {
                        subStrMap.set(str, 1)
                    }
                }
                k += key.length
            }
        }
        for (const key of wordMap.keys()) {
            if (
                !subStrMap.has(key) ||
                subStrMap.get(key) !== wordMap.get(key)
            ) {
                subStrMap.clear()
                continue out
            }
        }
        ans.push(i)
        subStrMap.clear()
    }
    return ans
}
