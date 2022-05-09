// 345. 反转字符串中的元音字母

function reverseVowels(s: string): string {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const isTarget = (char: string): boolean => set.has(char)
    const swap = (arr: string[], i: number, j: number): void => {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    const ans = [...s]
    let i = 0
    let j = ans.length - 1
    while (i < j) {
        while (i < j && !isTarget(s[i])) {
            i++
        }
        while (i < j && !isTarget(s[j])) {
            j--
        }
        if (i < j) {
            swap(ans, i, j)
            i++
            j--
        }
    }
    return ans.join('')
}
