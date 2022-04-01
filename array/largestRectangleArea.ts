// 84. 柱状图中最大的矩形

function largestRectangleArea(heights: number[]): number {
    const n = heights.length
    let max = 0
    const stack: number[] = []
    let index = 0
    while (index < n) {
        if (
            stack.length === 0 ||
            heights[stack[stack.length - 1]] < heights[index]
        ) {
            stack.push(index++)
        } else if (heights[stack[stack.length - 1]] === heights[index]) {
            stack.pop()
            stack.push(index++)
        } else {
            const l = stack.length
            if (l === 1) {
                max = Math.max(max, index * heights[stack[0]])
            } else {
                max = Math.max(
                    max,
                    (index - stack[l - 2] - 1) * heights[stack[l - 1]]
                )
            }
            stack.pop()
        }
    }
    for (let i = 0; i < stack.length; i++) {
        if (i === 0) {
            max = Math.max(
                max,
                heights[stack[i]] * (stack[stack.length - 1] + 1)
            )
        } else if (i === stack.length - 1) {
            max = Math.max(max, heights[stack[i]] * (stack[i] - stack[i - 1]))
        } else {
            max = Math.max(
                max,
                heights[stack[i]] * (stack[stack.length - 1] - stack[i - 1])
            )
        }
    }
    return max
}
