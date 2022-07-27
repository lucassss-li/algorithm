//二叉树的（非递归版本）遍历操作

import { TreeNode } from './Tree'

//先序
function preOrder(head: TreeNode): Array<number> {
    const res: number[] = []
    if (!head) return res
    const stack: TreeNode[] = [head]
    let cur_node: TreeNode
    while (stack.length) {
        cur_node = <TreeNode>stack.pop()
        res.push(cur_node.val)
        cur_node.right && stack.push(cur_node.right)
        cur_node.left && stack.push(cur_node.left)
    }
    return res
}

//中序
function middleOrder(head: TreeNode): Array<number> {
    const res: number[] = []
    if (!head) return res
    const stack: TreeNode[] = [head]
    let cur_node: TreeNode | null = head.left
    while (cur_node || stack.length) {
        if (cur_node) {
            stack.push(cur_node)
            cur_node = cur_node.left
        } else {
            cur_node = <TreeNode>stack.pop()
            res.push(cur_node.val)
            cur_node = cur_node.right
        }
    }
    return res
}

//后序
function postOrder(head: TreeNode): Array<number> {
    const res: number[] = []
    if (!head) return res
    const stack: TreeNode[] = [head]
    let cur_node: TreeNode
    while (stack.length) {
        cur_node = <TreeNode>stack.pop()
        res.push(cur_node.val)
        cur_node.left && stack.push(cur_node.left)
        cur_node.right && stack.push(cur_node.right)
    }
    return res.reverse()
}

//层序
function sequenceOrder(head: TreeNode): Array<number> {
    const res: number[] = []
    if (!head) return res
    const queue: TreeNode[] = [head]
    let cur_node: TreeNode
    while (queue.length) {
        cur_node = <TreeNode>queue.shift()
        res.push(cur_node.val)
        cur_node.left && queue.push(cur_node.left)
        cur_node.right && queue.push(cur_node.right)
    }
    return res
}

export { preOrder, middleOrder, postOrder, sequenceOrder }
