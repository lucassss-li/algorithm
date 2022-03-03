import { GraphNode, Edge, Graph } from './Graph'

// [
//     [-1, 4, -1, 2, 8, -1],
//     [4, -1, -1, -1, -1, 7],
//     [-1, -1, -1, -1, 1, -1],
//     [2, -1, -1, -1, -1, 10],
//     [8, -1, 1, -1, -1, 15],
//     [-1, 7, -1, 10, 15, -1]
// ]

function matrixToGraph(matrix: number[][]): Graph {
    const graph = new Graph()
    for (let i in matrix) {
        for (let j in matrix[i]) {
            const fromNode = graph.nodes.has(+i)
                ? graph.nodes.get(+i)
                : new GraphNode(+i)
            const toNode = graph.nodes.has(+j)
                ? graph.nodes.get(+j)
                : new GraphNode(+j)
            if (fromNode && toNode) {
                graph.nodes.set(+i, fromNode)
                graph.nodes.set(+j, toNode)
                if (matrix[i][j] === -1) continue
                if (!fromNode.nextSet.has(toNode)) {
                    fromNode.nextSet.add(toNode)
                    const edge = new Edge(matrix[i][j], fromNode, toNode)
                    fromNode.outEdges.add(edge)
                    graph.edges.add(edge)
                }
            }
        }
    }
    return graph
}

// [
//     [[1, 4],[3, 2],[4, 8]],
//     [[0, 4],[5, 7]],
//     [[4, 1]],
//     [[0, 2],[5, 10]],
//     [[0, 8],[2, 1],[5, 15]],
//     [[1, 7],[3, 10],[4, 15]]
// ]

function listToGraph(list: Array<[number, number]>[]): Graph {
    const graph = new Graph()
    for (let i in list) {
        const formNode = graph.nodes.get(+i)
            ? graph.nodes.get(+i)
            : new GraphNode(+i)
        graph.nodes.set(+i, <GraphNode>formNode)
        for (let [value, weight] of list[i]) {
            const toNode = graph.nodes.get(value)
                ? graph.nodes.get(value)
                : new GraphNode(value)
            graph.nodes.set(value, <GraphNode>toNode)
            if (formNode && toNode) {
                const edge = new Edge(weight, formNode, toNode)
                formNode.nextSet.add(toNode)
                formNode.outEdges.add(edge)
                graph.edges.add(edge)
            }
        }
    }
    return graph
}

export { matrixToGraph, listToGraph }
