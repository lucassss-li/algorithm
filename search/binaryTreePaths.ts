// 257. 二叉树的所有路径

import { TreeNode, createTree } from '../tree/Tree'

//递归
function binaryTreePaths(root: TreeNode): string[] {
    return process(root).map(path => path.join('->'))
    function process(curNode: TreeNode): number[][] {
        let ans: number[][] = []
        if (!curNode) {
            return ans
        }
        if (curNode.left_node) {
            ans = [
                ...ans,
                ...process(curNode.left_node).map(item => [
                    curNode.value,
                    ...item
                ])
            ]
        }
        if (curNode.right_node) {
            ans = [
                ...ans,
                ...process(curNode.right_node).map(item => [
                    curNode.value,
                    ...item
                ])
            ]
        }
        if (!curNode.left_node && !curNode.right_node) {
            ans = [[curNode.value]]
        }
        return ans
    }
}

// DFS
function binaryTreePaths_DFS(root: TreeNode): string[] {
    const stack: TreeNode[] = [root]
    const path: string[] = [String(root.value)]
    const ans: string[] = []
    let curNode
    let curPath
    while (stack.length) {
        curNode = stack.pop() as TreeNode
        curPath = path.pop() as string
        if (!curNode.right_node && !curNode.left_node) {
            ans.push(curPath)
        }
        if (curNode.right_node) {
            stack.push(curNode.right_node)
            path.push(curPath + '->' + curNode.right_node.value)
        }
        if (curNode.left_node) {
            stack.push(curNode.left_node)
            path.push(curPath + '->' + curNode.left_node.value)
        }
    }
    return ans
}

const root = createTree([1, 2, 3, '#', 5])
