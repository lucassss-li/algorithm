// 744. 寻找比目标字母大的最小字母

function nextGreatestLetter(letters: string[], target: string): string {
    let l = 0
    let r = letters.length - 1
    let mid = 0
    while (l <= r) {
        mid = l + Math.floor((r - l) / 2)
        if (letters[mid] === target) {
            l = mid + 1
        } else if (letters[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return letters[r + 1] || letters[0]
}
