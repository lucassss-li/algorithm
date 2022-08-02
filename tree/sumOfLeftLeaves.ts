import { TreeNode } from './Tree'

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) return 0
    let sum = 0
    process(root)
    return sum
    function process(node: TreeNode) {
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val
        }
        node.left && process(node.left)
        node.right && process(node.right)
    }
}
