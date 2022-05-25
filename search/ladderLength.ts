// 127. 单词接龙

function ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[]
): number {
    const queue = [[beginWord, 1]]
    const wordSet = new Set(wordList)
    const visited = new Set()
    while (queue.length) {
        const [curWord, step] = queue.shift() as [string, number]
        if (curWord === endWord) return step
        for (let i = 0; i < beginWord.length; i++) {
            for (let j = 97; j <= 122; j++) {
                const newWord =
                    curWord.slice(0, i) +
                    String.fromCharCode(j) +
                    curWord.slice(i + 1)
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    queue.push([newWord, step + 1])
                    visited.add(newWord)
                }
            }
        }
    }
    return 0
}
