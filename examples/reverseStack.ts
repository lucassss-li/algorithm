function reverseStack(stack: number[]) {
    if (stack.length === 0) {
        return
    }
    let num = f(stack)
    reverseStack(stack)
    stack.push(num)
}

function f(stack: number[]): number {
    let result = stack.pop()
    if (!stack.length) {
        return <number>result
    } else {
        let last = f(stack)
        stack.push(<number>result)
        return last
    }
}

export { reverseStack }
