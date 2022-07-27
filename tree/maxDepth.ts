import { TreeNode } from './Tree'

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    const queue: [TreeNode, number][] = []
    queue.push([root, 1])
    let level = 0
    while (queue.length) {
        const [node, _level] = <[TreeNode, number]>queue.shift()
        level = _level
        node.left && queue.push([node.left, level + 1])
        node.right && queue.push([node.right, level + 1])
    }
    return level
}
