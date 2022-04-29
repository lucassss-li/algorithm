// 12. 整数转罗马数字

function intToRoman(num: number): string {
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romans = [
        'M',
        'CM',
        'D',
        'CD',
        'C',
        'XC',
        'L',
        'XL',
        'X',
        'IX',
        'V',
        'IV',
        'I'
    ]
    let ans = ''
    let index = 0
    while (index < 13) {
        while (num >= nums[index]) {
            ans += romans[index]
            num -= nums[index]
        }
        index++
    }
    return ans
}
