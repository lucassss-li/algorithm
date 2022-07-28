import { TreeNode } from './Tree'

function mergeTrees(
    root1: TreeNode | null,
    root2: TreeNode | null
): TreeNode | null {
    return root1 && root2 ? process(root1, root2) : root1 || root2
    function process(node1: TreeNode, node2: TreeNode): TreeNode {
        const newNode = new TreeNode(node1.val + node2.val)
        processChild(node1, node2, 'left')
        processChild(node1, node2, 'right')
        return newNode
        function processChild(
            node1: TreeNode,
            node2: TreeNode,
            key: 'left' | 'right'
        ) {
            if (node1[key] && node2[key]) {
                newNode[key] = process(
                    <TreeNode>node1[key],
                    <TreeNode>node2[key]
                )
            } else if (node1[key]) {
                newNode[key] = node1[key]
            } else {
                newNode[key] = node2[key]
            }
        }
    }
}
