import { TreeNode } from './Tree'

function isSubtree(root: TreeNode, subRoot: TreeNode): boolean {
    return traverse(root)
    function traverse(node: TreeNode): boolean {
        if (process(node, subRoot)) {
            return true
        } else if (node.right && traverse(node.right)) {
            return true
        } else if (node.left && traverse(node.left)) {
            return true
        } else {
            return false
        }
    }
    function process(node: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!node && !subRoot) {
            return true
        }
        if (!node || !subRoot) {
            return false
        }
        return (
            node.val === subRoot.val &&
            process(node.left, subRoot.left) &&
            process(node.right, subRoot.right)
        )
    }
}
