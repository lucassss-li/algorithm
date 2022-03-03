import { GraphNode, Graph } from './Graph'

function BFS(graph: Graph): number[] {
    const res: number[] = []
    const walkedSet = new Set<GraphNode>()
    const queue: GraphNode[] = []

    for (let [value, graphNode] of graph.nodes) {
        while (queue.length) {
            let cur_node = <GraphNode>queue.shift()
            dealNode(cur_node, cur_node.value)
        }
        dealNode(graphNode, value)
    }

    function dealNode(graphNode: GraphNode, value: number) {
        if (!walkedSet.has(graphNode)) {
            res.push(value)
            walkedSet.add(graphNode)
            queue.push(...graphNode.nextSet)
        }
    }

    return res
}

function DFS(graph: Graph): number[] {
    const res: number[] = []
    const walkedSet = new Set<GraphNode>()
    const stack: GraphNode[] = []

    for (let [value, graphNode] of graph.nodes) {
        while (stack.length) {
            const cur_node = <GraphNode>stack.pop()
            if (walkedSet.has(cur_node)) {
                for (let nextNode of cur_node.nextSet) {
                    if (walkedSet.has(nextNode)) {
                        continue
                    } else {
                        res.push(nextNode.value)
                        walkedSet.add(nextNode)
                        stack.push(cur_node)
                        stack.push(nextNode)
                        break
                    }
                }
            } else {
                res.push(cur_node.value)
                walkedSet.add(cur_node)
                stack.push(cur_node)
            }
        }
        stack.push(graphNode)
    }

    return res
}

export { BFS, DFS }
