import { TreeNode } from './Tree'

function lowestCommonAncestor(
    root: TreeNode,
    p: TreeNode,
    q: TreeNode
): TreeNode {
    if (root.val === p.val || root.val === q.val) {
        return root
    }
    const left = root.left ? lowestCommonAncestor(root.left, p, q) : null
    const right = root.right ? lowestCommonAncestor(root.right, p, q) : null
    if (left && right) {
        return root
    }
    return <TreeNode>(left || right)
}
