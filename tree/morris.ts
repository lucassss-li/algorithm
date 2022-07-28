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

function postOrder(root: TreeNode | null): void {
    if (!root) return
    let cur: TreeNode | null = root
    const ans: number[] = []
    while (cur) {
        if (cur.left) {
            const mostRight = findMostRight(cur.left, cur)
            if (mostRight.right === null) {
                mostRight.right = cur
                cur = cur.left
            } else {
                mostRight.right = null
                logRightBorder(cur.left, ans)
                cur = cur.right
            }
        } else {
            cur = cur.right
        }
    }
    logRightBorder(root, ans)
    console.log(ans)
    function findMostRight(node: TreeNode, _node: TreeNode): TreeNode {
        while (node.right && node.right !== _node) {
            node = node.right
        }
        return node
    }
    function logRightBorder(node: TreeNode | null, ans: number[]): void {
        if (!node) return
        const arr = []
        arr.push(node.val)
        node = node.right
        while (node) {
            arr.push(node.val)
            node = node.right
        }
        ans.push(...arr.reverse())
    }
}

export { morris, preOrder, midOrder, postOrder }
