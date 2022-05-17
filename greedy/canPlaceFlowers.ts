// 605. 种花问题

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    function canPlace(flowerbed: number[], index: number): boolean {
        return (
            !flowerbed[index] && !flowerbed[index - 1] && !flowerbed[index + 1]
        )
    }
    let m = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (canPlace(flowerbed, i)) {
            flowerbed[i] = 1
            m++
        }
    }
    return m >= n
}
