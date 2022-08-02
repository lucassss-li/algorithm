import { createTree, TreeNode } from './Tree'

function longestUnivaluePath(root: TreeNode | null): number {
    if (!root) return 0
    return Math.max(...process(root)) - 1
    function process(node: TreeNode): [number, number] {
        const left_ans = node.left ? process(node.left) : [0, 0]
        const right_ans = node.right ? process(node.right) : [0, 0]
        let n = 1
        if (node.left && node.val === node.left.val) {
            n = Math.max(left_ans[0] + 1, n)
        }
        if (node.right && node.val === node.right.val) {
            n = Math.max(right_ans[0] + 1, n)
        }
        return [
            n,
            Math.max(
                ...left_ans,
                ...right_ans,
                node.left &&
                    node.val === node.left.val &&
                    node.right &&
                    node.val === node.right.val
                    ? left_ans[0] + right_ans[0] + 1
                    : 0
            )
        ]
    }
}
