// 141. 环形链表1

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false
    let point1: ListNode | null = head
    let point2: ListNode | null = head
    while (point1 && point2) {
        try {
            point1 = point1.next
            point2 = (<ListNode>point2.next).next
        } catch (error) {
            return false
        }
        if (point1 === point2) {
            return true
        }
    }
    return false
}
