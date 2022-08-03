import { TreeNode } from './Tree'

function findBottomLeftValue(root: TreeNode): number {
    const queue = [[root, 1]]
    let l = 1
    let ans = root
    while (queue.length) {
        const [node, level] = <[TreeNode, number]>queue.shift()
        if (level > l) {
            ans = node
            l = level
        }
        node.left && queue.push([node.left, level + 1])
        node.right && queue.push([node.right, level + 1])
    }
    return ans.val
}
