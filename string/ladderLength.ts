// 127. 单词接龙

// BFS
function ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[]
): number {
    const wordSet = new Set(wordList)
    const queue = [[beginWord, 1]]
    while (queue.length) {
        const [word, level] = <[string, number]>queue.shift()
        if (word === endWord) {
            return level
        }
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                // 对应26个字母
                const newWord =
                    word.slice(0, i) +
                    String.fromCharCode(c) +
                    word.slice(i + 1) // 形成新词
                if (wordSet.has(newWord)) {
                    // 单词表里有这个新词
                    queue.push([newWord, level + 1]) // 作为下一层的词入列
                    wordSet.delete(newWord) // 避免该词重复入列
                }
            }
        }
    }
    return 0
}

//双端BFS
function _ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[]
): number {
    const wordSet = new Set(wordList)
    if (!wordSet.size || !wordSet.has(endWord)) {
        return 0
    }
    let beginVisited = new Set<string>()
    beginVisited.add(beginWord)
    let endVisited = new Set<string>()
    endVisited.add(endWord)
    let step = 1
    while (beginVisited.size && endVisited.size) {
        if (beginVisited.size > endVisited.size) {
            const temp = beginVisited
            beginVisited = endVisited
            endVisited = temp
        }
        const newVisited = new Set<string>()
        for (const word of beginVisited) {
            for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) {
                    const newWord =
                        word.slice(0, i) +
                        String.fromCharCode(c) +
                        word.slice(i + 1)
                    if (endVisited.has(newWord)) {
                        return step + 1
                    }
                    if (wordSet.has(newWord)) {
                        newVisited.add(newWord)
                        wordSet.delete(newWord)
                    }
                }
            }
        }
        step++
        beginVisited = newVisited
    }
    return 0
}
