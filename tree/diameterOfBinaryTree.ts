import { TreeNode } from './Tree'

function diameterOfBinaryTree(root: TreeNode | null): number {
    function process(node: TreeNode | null): [number, number] {
        if (!node) return [0, 0]
        const left_info = process(node.left)
        const right_info = process(node.right)
        return [
            Math.max(left_info[1] + right_info[1], left_info[0], right_info[0]),
            Math.max(left_info[1], right_info[1]) + 1
        ]
    }
    return process(root)[0]
}
