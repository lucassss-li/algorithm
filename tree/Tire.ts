class TrieNode {
    n = 0
    e = 0
    paths: TrieNode[] = []
}
class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    root: TrieNode

    insert(word: string): void {
        let node = this.root
        for (const char of word) {
            node.n++
            const i = char.charCodeAt(0) - 97
            let path_node = node.paths[i]
            if (!path_node) {
                path_node = node.paths[i] = new TrieNode()
            }
            node = path_node
        }
        node.e++
    }

    search(word: string): boolean {
        let node = this.root
        for (const char of word) {
            const i = char.charCodeAt(0) - 97
            const path_node = node.paths[i]
            if (!path_node) {
                return false
            }
            node = path_node
        }
        return !!node.e
    }

    startsWith(prefix: string): boolean {
        let node = this.root
        for (const char of prefix) {
            const i = char.charCodeAt(0) - 97
            const path_node = node.paths[i]
            if (!path_node) {
                return false
            }
            node = path_node
        }
        return true
    }
}
