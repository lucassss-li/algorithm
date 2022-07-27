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
        const left: innerRes | null = head.left ? inner(head.left) : null
        const right: innerRes | null = head.right ? inner(head.right) : null
        if (left && right) {
            return {
                isBst:
                    left.isBst &&
                    right.isBst &&
                    left.maxNum < head.val &&
                    right.minNum > head.val,
                maxNum: right.maxNum,
                minNum: left.minNum
            }
        } else if (left) {
            return {
                isBst: left.isBst && left.maxNum < head.val,
                maxNum: head.val,
                minNum: left.minNum
            }
        } else if (right) {
            return {
                isBst: right.isBst && right.minNum > head.val,
                maxNum: right.maxNum,
                minNum: head.val
            }
        } else {
            return {
                isBst: true,
                maxNum: head.val,
                minNum: head.val
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
        const left: innerRes = inner(head.left)
        const right: innerRes = inner(head.right)
        return {
            isAVL: left.isAVL && right.isAVL && Math.abs(left.h - right.h) <= 1,
            h: (left.h > right.h ? left.h : right.h) + 1
        }
    }
}

export { isBST, isAVL }
