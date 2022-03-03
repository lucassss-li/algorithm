//最小生成树kruskal、prim算法
import { GraphNode, Edge, Graph } from './Graph'

function kruskal(graph: Graph): Edge[] {
    class UnionSet<T> {
        public dataMap: Map<T, Set<T>> = new Map()
        constructor(arr: Array<T>) {
            for (let item of arr) {
                this.dataMap.set(item, new Set([item]))
            }
        }
        isIntersect(n1: T, n2: T): boolean {
            return this.dataMap.get(n1) === this.dataMap.get(n2)
        }
        union(n1: T, n2: T) {
            if (this.isIntersect(n1, n2)) return
            const n1_set = <Set<T>>this.dataMap.get(n1)
            const n2_set = <Set<T>>this.dataMap.get(n2)
            for (let item of n1_set) {
                n2_set.add(item)
            }
            for (let item of n2_set) {
                this.dataMap.set(item, n2_set)
            }
        }
    }

    const res: Edge[] = []
    const unionSet = new UnionSet<GraphNode>([...graph.nodes.values()])
    const edges: Edge[] = [...graph.edges].sort((a, b) => a.weight - b.weight)
    for (let edge of edges) {
        const flag = unionSet.isIntersect(edge.startNode, edge.endNode)
        if (!flag) {
            unionSet.union(edge.startNode, edge.endNode)
            res.push(edge)
        } else {
            continue
        }
    }
    return res
}

function prim(graph: Graph): Edge[] {
    const res: Edge[] = []
    const nodes = new Set<GraphNode>()
    const edges: Edge[] = []
    for (let [value, graphNode] of graph.nodes) {
        while (edges.length) {
            const edge = <Edge>edges.pop()
            if (!nodes.has(edge.endNode)) {
                nodes.add(edge.endNode)
                edges.push(...edge.endNode.outEdges)
                edges.sort((a, b) => b.weight - a.weight)
                res.push(edge)
            }
        }
        nodes.add(graphNode)
        edges.push(...graphNode.outEdges)
        edges.sort((a, b) => b.weight - a.weight)
    }
    return res
}

export { kruskal, prim }
