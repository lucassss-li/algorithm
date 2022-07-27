import { TreeNode } from './Tree'

function morris(root: TreeNode): void {
    let cur: TreeNode | null = root
    while (cur) {
        if (cur.left) {
            let mostRight: TreeNode = cur.left
            while (mostRight.right && mostRight.right !== cur) {
                mostRight = mostRight.right
            }
            if (mostRight.right !== cur) {
                mostRight.right = cur
                cur = cur.left
                continue
            }
            if (mostRight.right === cur) {
                mostRight.right = null
            }
        }
        cur = cur.right
    }
}

function preOrder(root: TreeNode): void {
    let cur: TreeNode | null = root
    while (cur) {
        if (cur.left) {
            let mostRight: TreeNode = cur.left
            while (mostRight.right && mostRight.right !== cur) {
                mostRight = mostRight.right
            }
            if (mostRight.right !== cur) {
                console.log(cur.val)
                mostRight.right = cur
                cur = cur.left
                continue
            }
            if (mostRight.right === cur) {
                mostRight.right = null
                cur = cur.right
            }
        } else {
            console.log(cur.val)
            cur = cur.right
        }
    }
}

function midOrder(root: TreeNode): void {
    let cur: TreeNode | null = root
    while (cur) {
        if (cur.left) {
            let mostRight: TreeNode = cur.left
            while (mostRight.right && mostRight.right !== cur) {
                mostRight = mostRight.right
            }
            if (mostRight.right !== cur) {
                mostRight.right = cur
                cur = cur.left
                continue
            }
            if (mostRight.right === cur) {
                console.log(cur.val)
                mostRight.right = null
                cur = cur.right
            }
        } else {
            console.log(cur.val)
            cur = cur.right
        }
    }
}

export { morris, preOrder, midOrder }
