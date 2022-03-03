/**
 * @class
 * @classdesc 链表节点
 */
class LinkNode {
    public next: LinkNode | null = null
    constructor(public value: number) {}
}

/**
 *@function
 * @description 创建无环单链表
 * @param {number[]} arr 节点值数组
 * @returns {LinkNode} 头节点
 */
function createLink(arr: number[]) {
    let head = null,
        cur_node = null,
        pre_node = null
    for (let value of arr) {
        cur_node = new LinkNode(value)
        if (!head) {
            head = cur_node
            pre_node = cur_node
        } else {
            pre_node && (pre_node.next = cur_node)
            pre_node = cur_node
        }
    }
    return head
}

/**
 * @function
 * @description 创建有环单链表
 * @param {number[]} arr 节点值数组
 * @returns {LinkNode} 头节点
 */
function createLoopLink(arr: number[]) {
    let head = null,
        cur_node = null,
        pre_node = null
    const nodes: LinkNode[] = []
    for (let value of arr) {
        cur_node = new LinkNode(value)
        nodes.push(cur_node)
        if (!head) {
            head = cur_node
            pre_node = cur_node
        } else {
            pre_node && (pre_node.next = cur_node)
            pre_node = cur_node
        }
    }
    cur_node && (cur_node.next = nodes[Math.floor(Math.random() * arr.length)])
    return head
}

export { LinkNode, createLink, createLoopLink }
