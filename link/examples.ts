//判断节点是否有环

import { LinkNode } from './Link'

function hasLoop1(head: LinkNode | null): LinkNode | null {
    const set = new Set<LinkNode>()
    let cur_node = head
    while (cur_node) {
        if (set.has(cur_node)) {
            return cur_node
        }
        set.add(cur_node)
        cur_node = cur_node.next
    }
    return null
}

function hasLoop2(head: LinkNode | null): LinkNode | null {
    if (!head) return null
    let slow: LinkNode = head
    let fast: LinkNode = head
    let flag = false
    while (true) {
        if (!slow.next || !fast?.next?.next) {
            return null
        } else {
            slow = slow.next
            fast = flag ? fast.next : fast.next.next
            if (slow === fast) {
                if (flag) {
                    return slow
                }
                flag = true
                fast = head
            }
        }
    }
}

export { hasLoop1, hasLoop2 }
