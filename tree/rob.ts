import { TreeNode } from './Tree'

function rob(root: TreeNode | null): number {
    if (!root) return 0
    return Math.max(...process(root))
    function process(node: TreeNode): [number, number] {
        const l = node.left ? process(node.left) : [0, 0]
        const r = node.right ? process(node.right) : [0, 0]
        return [node.val + l[1] + r[1], Math.max(...l) + Math.max(...r)]
    }
}
