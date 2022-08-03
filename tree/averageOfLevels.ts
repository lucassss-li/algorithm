import { TreeNode } from './Tree'

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return []
    const queue: Array<[TreeNode, number]> = [[root, 0]]
    const ans: Array<[number, number]> = []
    while (queue.length) {
        const [node, level] = <[TreeNode, number]>queue.shift()
        ans[level] = ans[level]
            ? [ans[level][0] + node.val, ans[level][1] + 1]
            : [node.val, 1]
        node.left && queue.push([node.left, level + 1])
        node.right && queue.push([node.right, level + 1])
    }
    return ans.map(item => item[0] / item[1])
}
