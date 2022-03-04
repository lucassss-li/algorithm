class TreeNode {
    public pass: number = 0
    public end: number = 0
    public paths: TreeNode[] = []
}

/**
 * @class
 * @classdesc 前缀树
 */
class PrefixTree {
    public root: TreeNode = new TreeNode()
    /**
     * @function
     * @description 向前缀树中添加字符串
     * @param {string} str - 要添加的字符串
     */
    add(str: string): void {
        if (str.length === 0) {
            return
        }
        const pathData = [...str].map(char => char.charCodeAt(0) - 97)
        let cur_node = this.root
        for (let path of pathData) {
            cur_node.pass++
            if (!cur_node.paths[path]) {
                cur_node.paths[path] = new TreeNode()
            }
            cur_node = cur_node.paths[path]
        }
        cur_node.pass++
        cur_node.end++
    }
    /**
     * @function
     * @description 检查前缀树中是否含有该字符串
     * @param {string} str - 要检查的字符串
     * @returns {boolean} 是否含有
     */
    has(str: string): boolean {
        if (str.length === 0) {
            return true
        }
        const pathData = [...str].map(char => char.charCodeAt(0) - 97)
        let cur_node = this.root
        for (let path of pathData) {
            if (!cur_node.paths[path] || cur_node.paths[path].pass === 0) {
                return false
            }
            cur_node = cur_node.paths[path]
        }
        return cur_node.end > 0
    }
    /**
     * @function
     * @description 删除前缀树中该字符串
     * @param {string} str - 要删除的字符串
     */
    delete(str: string): void {
        if (!this.has(str)) {
            return
        }
        const pathData = [...str].map(char => char.charCodeAt(0) - 97)
        let cur_node = this.root
        for (let path of pathData) {
            cur_node.pass--
            if (cur_node.pass === 0) {
                delete cur_node.paths[path]
                return
            }
            cur_node = cur_node.paths[path]
        }
        cur_node.pass--
        cur_node.end--
    }
    /**
     * @function
     * @description 获取前缀树中的字符串总数
     * @returns {number}
     */
    total(): number {
        return this.root.pass
    }
    /**
     * @function
     * @description 获取前缀树中的以该字符串为前缀的总数
     * @param {string} str - 前缀字符串
     * @returns {number} 以该字符串为前缀的总数
     */
    prefix(str: string): number {
        const pathData = [...str].map(char => char.charCodeAt(0) - 97)
        let cur_node = this.root
        for (let path of pathData) {
            cur_node = cur_node.paths[path]
        }
        return cur_node.pass
    }
}

export { PrefixTree }
