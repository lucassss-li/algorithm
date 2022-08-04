import { TreeNode } from './Tree'

function kthSmallest(root: TreeNode, k: number): number {
    const stack: TreeNode[] = []
    let node: TreeNode | null = root
    let s = 0
    while (node || stack.length) {
        if (node) {
            if (node.left) {
                stack.push(node)
                node = node.left
            } else {
                if (++s === k) break
                node = node.right
            }
        } else {
            node = <TreeNode>stack.pop()
            if (++s === k) break
            node = node.right
        }
    }
    return node?.val || 0
}
