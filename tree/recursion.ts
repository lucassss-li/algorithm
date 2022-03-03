//二叉树递归套路

import { TreeNode } from './Tree'

//判断是否是搜索二叉树
function isBST(head: TreeNode) {
    type innerRes = {
        isBst: boolean
        maxNum: number
        minNum: number
    }
    return inner(head).isBst
    function inner(head: TreeNode): innerRes {
        const left: innerRes | null = head.left_node
            ? inner(head.left_node)
            : null
        const right: innerRes | null = head.right_node
            ? inner(head.right_node)
            : null
        if (left && right) {
            return {
                isBst:
                    left.isBst &&
                    right.isBst &&
                    left.maxNum < head.value &&
                    right.minNum > head.value,
                maxNum: right.maxNum,
                minNum: left.minNum
            }
        } else if (left) {
            return {
                isBst: left.isBst && left.maxNum < head.value,
                maxNum: head.value,
                minNum: left.minNum
            }
        } else if (right) {
            return {
                isBst: right.isBst && right.minNum > head.value,
                maxNum: right.maxNum,
                minNum: head.value
            }
        } else {
            return {
                isBst: true,
                maxNum: head.value,
                minNum: head.value
            }
        }
    }
}

//判断是否是平衡二叉树
function isAVL(head: TreeNode) {
    type innerRes = {
        isAVL: boolean
        h: number
    }
    return inner(head).isAVL
    function inner(head: TreeNode | null): innerRes {
        if (!head) {
            return {
                isAVL: true,
                h: 0
            }
        }
        const left: innerRes = inner(head.left_node)
        const right: innerRes = inner(head.right_node)
        return {
            isAVL: left.isAVL && right.isAVL && Math.abs(left.h - right.h) <= 1,
            h: (left.h > right.h ? left.h : right.h) + 1
        }
    }
}

export { isBST, isAVL }
