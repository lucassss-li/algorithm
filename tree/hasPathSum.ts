import { TreeNode } from './Tree'

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false
    }
    return process(root, 0)
    function process(node: TreeNode, sum: number): boolean {
        sum = sum + node.val
        if (!node.left && !node.right) {
            return sum === targetSum
        }
        const l = node.left ? process(node.left, sum) : false
        const r = node.right ? process(node.right, sum) : false
        return l || r
    }
}
