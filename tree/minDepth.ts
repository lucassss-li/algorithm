import { TreeNode } from './Tree'

function minDepth(root: TreeNode | null): number {
    if (!root) return 0
    let min = +Infinity
    const queue: Array<[TreeNode, number]> = [[root, 1]]
    while (queue.length) {
        const [node, level] = <[TreeNode, number]>queue.shift()
        if (level > min) break
        if (!node.left && !node.right) {
            min = Math.min(min, level)
        }
        node.left && queue.push([node.left, level + 1])
        node.right && queue.push([node.right, level + 1])
    }
    return min
}
