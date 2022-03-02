import { TreeNode } from './Tree'

function preOrder(head: TreeNode): Array<number> {
    const res: number[] = []
    if (!head) return res
    const stack: TreeNode[] = [head]
    let cur_node: TreeNode
    while (stack.length) {
        cur_node = <TreeNode>stack.pop()
        res.push(cur_node.value)
        cur_node.right_node && stack.push(cur_node.right_node)
        cur_node.left_node && stack.push(cur_node.left_node)
    }
    return res
}

function middleOrder(head: TreeNode): Array<number> {
    const res: number[] = []
    if (!head) return res
    const stack: TreeNode[] = [head]
    let cur_node: TreeNode | null = head.left_node
    while (cur_node || stack.length) {
        if (cur_node) {
            stack.push(cur_node)
            cur_node = cur_node.left_node
        } else {
            cur_node = <TreeNode>stack.pop()
            res.push(cur_node.value)
            cur_node = cur_node.right_node
        }
    }
    return res
}

function postOrder(head: TreeNode): Array<number> {
    const res: number[] = []
    if (!head) return res
    const stack: TreeNode[] = [head]
    let cur_node: TreeNode
    while (stack.length) {
        cur_node = <TreeNode>stack.pop()
        res.push(cur_node.value)
        cur_node.left_node && stack.push(cur_node.left_node)
        cur_node.right_node && stack.push(cur_node.right_node)
    }
    return res.reverse()
}

function sequenceOrder(head: TreeNode): Array<number> {
    const res: number[] = []
    if (!head) return res
    const queue: TreeNode[] = [head]
    let cur_node: TreeNode
    while (queue.length) {
        cur_node = <TreeNode>queue.shift()
        res.push(cur_node.value)
        cur_node.left_node && queue.push(cur_node.left_node)
        cur_node.right_node && queue.push(cur_node.right_node)
    }
    return res
}

export { preOrder, middleOrder, postOrder, sequenceOrder }
