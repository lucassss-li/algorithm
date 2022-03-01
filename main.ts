import { createTree } from './tree/Tree'
import { middleOrder } from './tree/traverse'

const tree = createTree([1, 2, 3, 4, 5, 6, 7, '#', '#', 8, '#', '#', 9])

console.log(middleOrder(tree))
