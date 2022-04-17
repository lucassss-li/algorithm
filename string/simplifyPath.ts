// 71. 简化路径

function simplifyPath(path: string): string {
    const ans: string[] = []
    const paths = path.split('/').filter(e => e)
    for (let i = 0; i < paths.length; i++) {
        if (paths[i] === '.') {
            continue
        } else if (paths[i] === '..') {
            ans.pop()
        } else {
            ans.push(paths[i])
        }
    }
    return '/'+ans.join('/')
}