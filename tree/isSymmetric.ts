import { TreeNode, createTree } from './Tree'

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true
    return process(root.left, root.right)
    function process(left: TreeNode | null, right: TreeNode | null): boolean {
        if (!left && !right) {
            return true
        }
        if (!right || !left) {
            return false
        }
        return (
            left.val === right.val &&
            process(left.left, right.right) &&
            process(left.right, right.left)
        )
    }
}
