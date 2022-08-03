import { TreeNode } from './Tree'

function findSecondMinimumValue(root: TreeNode | null): number {
    if (!root) return -1
    const n = find(root, root.val)
    return n === Infinity ? -1 : n
    function find(node: TreeNode, target: number): number {
        if (node.val > target) return node.val
        const l = node.left ? find(node.left, target) : Infinity
        const r = node.right ? find(node.right, target) : Infinity
        return Math.min(l, r)
    }
    return Infinity
}
