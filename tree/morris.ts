import { TreeNode } from './Tree'

function morris(root: TreeNode): void {
    let cur: TreeNode | null = root
    while (cur) {
        if (cur.left_node) {
            let mostRight: TreeNode = cur.left_node
            while (mostRight.right_node && mostRight.right_node !== cur) {
                mostRight = mostRight.right_node
            }
            if (mostRight.right_node !== cur) {
                mostRight.right_node = cur
                cur = cur.left_node
                continue
            }
            if (mostRight.right_node === cur) {
                mostRight.right_node = null
            }
        }
        cur = cur.right_node
    }
}

function preOrder(root: TreeNode): void {
    let cur: TreeNode | null = root
    while (cur) {
        if (cur.left_node) {
            let mostRight: TreeNode = cur.left_node
            while (mostRight.right_node && mostRight.right_node !== cur) {
                mostRight = mostRight.right_node
            }
            if (mostRight.right_node !== cur) {
                console.log(cur.value)
                mostRight.right_node = cur
                cur = cur.left_node
                continue
            }
            if (mostRight.right_node === cur) {
                mostRight.right_node = null
                cur = cur.right_node
            }
        } else {
            console.log(cur.value)
            cur = cur.right_node
        }
    }
}

function midOrder(root: TreeNode): void {
    let cur: TreeNode | null = root
    while (cur) {
        if (cur.left_node) {
            let mostRight: TreeNode = cur.left_node
            while (mostRight.right_node && mostRight.right_node !== cur) {
                mostRight = mostRight.right_node
            }
            if (mostRight.right_node !== cur) {
                mostRight.right_node = cur
                cur = cur.left_node
                continue
            }
            if (mostRight.right_node === cur) {
                console.log(cur.value)
                mostRight.right_node = null
                cur = cur.right_node
            }
        } else {
            console.log(cur.value)
            cur = cur.right_node
        }
    }
}

export { morris, preOrder, midOrder }
