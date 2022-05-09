// 141. 环形链表

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false
    let point1 = head
    let point2 = head
    while (point1 && point2) {
        try {
            point1 = <ListNode>point1.next
            point2 = <ListNode>point2.next?.next
        } catch (error) {
            return false
        }
        if (point1 === point2) {
            return true
        }
    }
    return false
}
