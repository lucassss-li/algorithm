import { TreeNode } from './Tree'

function invertTree(root: TreeNode | null): TreeNode | null {
    function process(node: TreeNode | null): void {
        if (!node) return
        const { left, right } = node
        node.left = right
        node.right = left
        process(left)
        process(right)
    }
    process(root)
    return root
}
