class GraphNode {
    public nextSet: Set<GraphNode> = new Set()
    public outEdges: Set<Edge> = new Set()
    constructor(public value: number) {}
}

class Edge {
    constructor(
        public weight: number,
        public startNode: GraphNode,
        public endNode: GraphNode
    ) {}
}

class Graph {
    public nodes: Map<number, GraphNode> = new Map()
    public edges: Set<Edge> = new Set()
}

export { GraphNode, Edge, Graph }
