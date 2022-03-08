function hanota(A: number[], B: number[], C: number[]): void {
    move(A.length, A, C, B)
    function move(
        n: number,
        from: number[],
        to: number[],
        other: number[]
    ): void {
        if (n === 1) {
            to.push(<number>from.pop())
            return
        }
        move(n - 1, from, other, to)
        to.push(<number>from.pop())
        console.log(A, B, C)
        move(n - 1, other, to, from)
    }
}

export { hanota }
