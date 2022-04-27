//交错字符串

function isInterleave(s1: string, s2: string, s3: string): boolean {
    const n = s1.length
    const m = s2.length
    const t = s3.length

    if (n + m != t) {
        return false
    }

    const f: boolean[][] = Array(n + 1)
        .fill(0)
        .map(() => Array(m + 1).fill(false))

    f[0][0] = true
    for (let i = 0; i <= n; ++i) {
        for (let j = 0; j <= m; ++j) {
            const p = i + j - 1
            if (i > 0) {
                f[i][j] =
                    f[i][j] || (f[i - 1][j] && s1.charAt(i - 1) == s3.charAt(p))
            }
            if (j > 0) {
                f[i][j] =
                    f[i][j] || (f[i][j - 1] && s2.charAt(j - 1) == s3.charAt(p))
            }
        }
    }

    return f[n][m]
}
