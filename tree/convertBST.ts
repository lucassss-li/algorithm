import { TreeNode } from './Tree'

function convertBST(root: TreeNode | null): TreeNode | null {
    const stack: TreeNode[] = []
    let node: TreeNode | null = root
    let sum = 0
    while (node || stack.length) {
        if (node) {
            if (node.right) {
                stack.push(node)
                node = node.right
            } else {
                sum = node.val + sum
                node.val = sum
                node = node.left
            }
        } else {
            node = <TreeNode>stack.pop()
            sum = node.val + sum
            node.val = sum
            node = node.left
        }
    }
    return root
}
