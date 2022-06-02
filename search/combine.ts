// 77. 组合

function combine(n: number, k: number): number[][] {
    const ans: number[][] = []
    process([], new Set<number>())
    function process(path: number[], visited: Set<number>) {
        if (path.length === k) {
            ans.push([...path])
            return
        }
        for (let i = path[path.length - 1] || 1; i <= n; i++) {
            if (!visited.has(i)) {
                path.push(i)
                visited.add(i)
                process(path, visited)
                path.pop()
                visited.delete(i)
            }
        }
    }
    return ans
}
