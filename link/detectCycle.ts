// 142. 环形链表 II
function detectCycle(head: ListNode | null): ListNode | null {
    let point1: ListNode | null | undefined = head
    let point2: ListNode | null | undefined = head
    let flag = false
    while (point1 && point2) {
        point1 = point1.next
        if (!flag) {
            point2 = point2.next?.next
        } else {
            point2 = point2.next
        }
        if (point1 === point2) {
            if (flag) {
                return point1
            } else {
                flag = true
                point2 = head
                if (point1 === point2) {
                    return point1
                }
            }
        }
    }
    return null
}
