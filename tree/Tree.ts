/**
 * @class
 * @classdesc 树节点
 */
class TreeNode {
    public left: TreeNode | null = null
    public right: TreeNode | null = null
    constructor(public val: number) {}
}

/**
 * @function
 * @param {Array<number | '#'>} arr 节点值数组，字符‘#’表示该位置无节点
 * @returns {TreeNode} 树的根节点
 */
function createTree(arr: Array<number | '#'>): TreeNode {
    const tree: TreeNode[] = []
    for (const index in arr) {
        if (arr[index] === '#') {
            continue
        } else {
            const cur_node = new TreeNode(<number>arr[index])
            tree[index] = cur_node
            if (index !== '0') {
                if (+index & 1) {
                    tree[(+index - 1) >> 1].left = cur_node
                } else {
                    tree[(+index - 1) >> 1].right = cur_node
                }
            }
        }
    }
    return tree[0]
}

export { createTree, TreeNode }
