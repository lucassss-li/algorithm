import { TreeNode } from './Tree'

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (!root) return null
    if (p && q) {
        const _p = p.val < q.val ? p : q
        const _q = p.val > q.val ? p : q
        let node: TreeNode | null = root
        while (node) {
            if (
                (node.val > _p.val && node.val < _q.val) ||
                node.val === _p.val ||
                node.val === _q.val
            ) {
                break
            } else if (node.val < _p.val) {
                node = node.right
            } else {
                node = node.left
            }
        }
        return node
    } else {
        return p || q
    }
}
