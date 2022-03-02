class LinkNode {
    public next: LinkNode | null = null
    constructor(public value: number) {}
}

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
