// 406. 根据身高重建队列

function reconstructQueue(people: number[][]): number[][] {
    const queue: number[][] = []
    people.sort((a, b) => {
        if (a[0] - b[0] === 0) {
            return a[1] - b[1]
        } else {
            return b[0] - a[0]
        }
    })
    for (let i = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i])
    }
    return queue
}
