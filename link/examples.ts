import { LinkNode } from './Link'

//判断节点是否有环，哈希表
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

//判断节点是否有环，快慢指针
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

//判断回文单链表,栈+两次遍历
function palindromicLink1(head: LinkNode): boolean {
    const stack: LinkNode[] = []
    let cur_node: LinkNode | null = head
    while (cur_node) {
        stack.push(cur_node)
        cur_node = cur_node.next
    }
    cur_node = head
    while (cur_node) {
        if (cur_node.value !== stack.pop()?.value) {
            return false
        }
        cur_node = cur_node.next
    }
    return true
}

//判断回文单链表,快慢指针+栈
function palindromicLink2(head: LinkNode): boolean {
    let slow: LinkNode | null = head
    let fast: LinkNode | null | undefined = head
    const stack: LinkNode[] = []
    let flag = false
    let isOdd = false
    while (slow) {
        if (!fast && !flag) {
            flag = true
            if (isOdd) {
                stack.pop()
            }
        }
        if (!flag) {
            stack.push(slow)
            if (!fast?.next) {
                isOdd = true
            }
            fast = fast?.next?.next
        } else {
            if (stack.pop()?.value !== slow.value) {
                return false
            }
        }
        slow = slow.next
    }
    return true
}

export { hasLoop1, hasLoop2, palindromicLink1, palindromicLink2 }
