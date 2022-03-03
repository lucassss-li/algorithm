/**
 * @class
 * @classdesc 图节点
 */
class GraphNode {
    public nextSet: Set<GraphNode> = new Set()
    public outEdges: Set<Edge> = new Set()
    constructor(public value: number) {}
}

/**
 * @class
 * @classdesc 链接两节点的有权边
 */
class Edge {
    constructor(
        public weight: number,
        public startNode: GraphNode,
        public endNode: GraphNode
    ) {}
}

/**
 * @class
 * @classdesc 图
 */
class Graph {
    public nodes: Map<number, GraphNode> = new Map()
    public edges: Set<Edge> = new Set()
}

export { GraphNode, Edge, Graph }
