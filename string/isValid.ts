// 20. 有效的括号
function isValid(s: string): boolean {
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (['(', '[', '{'].includes(char)) {
            stack.push(char)
        } else if (!stack.length) {
            return false
        } else {
            if (
                Math.abs(
                    stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)
                ) < 10
            ) {
                stack.pop()
            } else {
                break
            }
        }
    }
    return !stack.length
}
