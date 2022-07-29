import { TreeNode } from './Tree'

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0
    let ans = 0
    process(root)
    return ans
    function process(node: TreeNode): void {
        ans += calNum(node)
        node.left && process(node.left)
        node.right && process(node.right)
    }
    function calNum(node: TreeNode): number {
        let ans = 0
        process(node, 0)
        return ans
        function process(node: TreeNode, sum: number) {
            sum = sum + node.val
            if (sum === targetSum) {
                ans++
            }
            if (node.left) {
                process(node.left, sum)
            }
            if (node.right) {
                process(node.right, sum)
            }
        }
    }
}
