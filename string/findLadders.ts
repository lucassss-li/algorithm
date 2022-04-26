// 126. 单词接龙 II

function findLadders(beginWord: string, endWord: string, wordList: string[]) {
    const wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return []

    const letterDict: string[] = []
    for (let i = 97; i < 123; i++) {
        letterDict.push(String.fromCharCode(i))
    }

    let isFound = false
    const retMap = new Map()

    bfs()
    if (!isFound) {
        return []
    }

    const retList: string[][] = []
    dfs(beginWord, [beginWord])
    return retList

    function bfs() {
        let visited = new Set([beginWord])
        let nextVisited = new Set<string>()

        const queue = [beginWord]
        while (queue.length > 0) {
            let length = queue.length
            while (length-- > 0) {
                const word = <string>queue.shift()
                for (let i = 0; i < word.length; i++) {
                    for (const letter of letterDict) {
                        const newWord =
                            word.slice(0, i) + letter + word.slice(i + 1)
                        if (wordSet.has(newWord)) {
                            if (!visited.has(newWord)) {
                                if (newWord === endWord) {
                                    isFound = true
                                }
                                // 避免下层元素重复加入，因为可能当前层的多个元素的下层元素都是同一个
                                if (!nextVisited.has(newWord)) {
                                    queue.push(newWord)
                                    nextVisited.add(newWord)
                                }
                                retMap.has(word)
                                    ? retMap.get(word).add(newWord)
                                    : retMap.set(word, new Set([newWord]))
                            }
                        }
                    }
                }
            }
            if (isFound) {
                break
            }
            visited = union(visited, nextVisited)
            nextVisited = new Set()
        }

        function union(setA: Set<string>, setB: Set<string>) {
            const _union = setA
            for (const s of setB) {
                _union.add(s)
            }
            return _union
        }
    }
    function dfs(word: string, list: string[]) {
        if (word === endWord) {
            retList.push([...list])
            return
        }
        const set = retMap.get(word)
        if (!set) {
            return
        }
        for (const w of set) {
            list.push(w)
            dfs(w, list)
            list.pop()
        }
    }
}
