import { TreeNode } from './Tree'
function isBalanced(root: TreeNode | null): boolean {
    function process(node: TreeNode | null): {
        isBalanced: boolean
        height: number
    } {
        if (!node) return { isBalanced: true, height: 0 }
        const left_info = process(node.left)
        const right_info = process(node.right)
        if (
            left_info.isBalanced &&
            right_info.isBalanced &&
            Math.abs(left_info.height - right_info.height) <= 1
        ) {
            return {
                isBalanced: true,
                height: Math.max(left_info.height, right_info.height) + 1
            }
        } else {
            return {
                isBalanced: false,
                height: Math.max(left_info.height, right_info.height) + 1
            }
        }
    }
    return process(root).isBalanced
}
