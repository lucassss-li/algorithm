import { TreeNode } from './Tree'

//寻找最低公共节点
function lowestCommonNode(
    head: TreeNode | null,
    n1: number,
    n2: number
): TreeNode | null {
    if (!head || head.val === n1 || head.val === n2) {
        return head
    }
    const left = lowestCommonNode(head.left, n1, n2)
    const right = lowestCommonNode(head.right, n1, n2)
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

        if (cur_node.val === n) {
            // eslint-disable-next-line
            while (true) {
                let father_node = fatherMap.get(cur_node)
                if (cur_node.right || !father_node) {
                    let _node = cur_node.right
                    while (_node && _node.left) {
                        _node = _node.left
                    }
                    successor = _node
                    break
                }
                if (father_node.left === cur_node) {
                    successor = father_node
                    break
                }
                if (father_node.right === cur_node) {
                    while (father_node && father_node.right === cur_node) {
                        cur_node = father_node
                        father_node = fatherMap.get(cur_node)
                    }
                    successor = father_node
                    break
                }
            }
            break
        }

        cur_node.left &&
            queue.push(cur_node.left) &&
            fatherMap.set(cur_node.left, cur_node)
        cur_node.right &&
            queue.push(cur_node.right) &&
            fatherMap.set(cur_node.right, cur_node)
    }
    return successor
}

export { lowestCommonNode, findSuccessor }
