// 744. 寻找比目标字母大的最小字母

function nextGreatestLetter(letters: string[], target: string): string {
    let i = -1
    let j = letters.length
    while (j - i > 1) {
        const mid = i + Math.floor((j - i) / 2)
        if (letters[mid] > target) {
            j = mid
        } else {
            i = mid
        }
    }
    return letters[j]||letters[0]
};
