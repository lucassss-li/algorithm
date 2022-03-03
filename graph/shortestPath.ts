//最短路径算法 dijkstra算法
import { GraphNode, Graph } from './Graph'

function dijkstra(graph: Graph, source: number): Map<GraphNode, number> {
    const res = new Map<GraphNode, number>()
    const lockedNode = new Set<GraphNode>()
    for (let [value, graphNode] of graph.nodes) {
        if (value === source) {
            res.set(graphNode, 0)
        } else {
            res.set(graphNode, -1)
        }
    }
    let cur_node: GraphNode = <GraphNode>graph.nodes.get(source)
    while (lockedNode.size < graph.nodes.size) {
        let nextNode: GraphNode | null = null
        let nextPath: number = Infinity
        for (let edge of cur_node.outEdges) {
            let endNode = edge.endNode
            if (lockedNode.has(endNode)) continue
            let path1 = <number>res.get(endNode)
            let path2 = <number>res.get(cur_node)
            if (path1 === -1 || path1 > path2 + edge.weight) {
                res.set(endNode, path2 + edge.weight)
            }
            if (edge.weight < nextPath) {
                nextPath = edge.weight
                nextNode = endNode
            }
        }
        lockedNode.add(cur_node)
        nextNode && (cur_node = nextNode)
    }
    return res
}

export { dijkstra }
