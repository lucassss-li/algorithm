class RandomPool<T> {
    private indexToElement = new Map<number, T>()
    private elementToIndex = new Map<T, number>()
    private size: number = 0
    add(element: T): void {
        this.indexToElement.set(this.size, element)
        this.elementToIndex.set(element, this.size)
        this.size++
    }
    get(): T {
        let index = Math.floor(Math.random() * this.size)
        return <T>this.indexToElement.get(index)
    }
    delete(element: T): void {
        let last = <T>this.indexToElement.get(this.size - 1)
        let target = <number>this.elementToIndex.get(element)
        this.indexToElement.set(target, last)
        this.size -= 1
    }
}

export { RandomPool }
