import { TreeNode } from './Tree'

//寻找最低公共节点
function lowestCommonNode(
    head: TreeNode | null,
    n1: number,
    n2: number
): TreeNode | null {
    if (!head || head.value === n1 || head.value === n2) {
        return head
    }
    const left = lowestCommonNode(head.left_node, n1, n2)
    const right = lowestCommonNode(head.right_node, n1, n2)
    if (left && right) {
        return head
    }
    return left || right
}

//寻找后继节点
function findSuccessor(head: TreeNode, n: number): TreeNode | null | undefined {
    let successor: TreeNode | null | undefined = null
    const fatherMap = new Map<TreeNode, TreeNode | null>()
    fatherMap.set(head, null)
    const queue: TreeNode[] = [head]
    let cur_node: TreeNode
    while (queue.length) {
        cur_node = <TreeNode>queue.shift()

        if (cur_node.value === n) {
            while (true) {
                let father_node = fatherMap.get(cur_node)
                if (cur_node.right_node || !father_node) {
                    let _node = cur_node.right_node
                    while (_node && _node.left_node) {
                        _node = _node.left_node
                    }
                    successor = _node
                    break
                }
                if (father_node.left_node === cur_node) {
                    successor = father_node
                    break
                }
                if (father_node.right_node === cur_node) {
                    while (father_node && father_node.right_node === cur_node) {
                        cur_node = father_node
                        father_node = fatherMap.get(cur_node)
                    }
                    successor = father_node
                    break
                }
            }
            break
        }

        cur_node.left_node &&
            queue.push(cur_node.left_node) &&
            fatherMap.set(cur_node.left_node, cur_node)
        cur_node.right_node &&
            queue.push(cur_node.right_node) &&
            fatherMap.set(cur_node.right_node, cur_node)
    }
    return successor
}

export { lowestCommonNode, findSuccessor }
