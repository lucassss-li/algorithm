class SimpleUnionSet<T> {
    private dataMap = new Map<T, Set<T>>()
    constructor(data: Array<T>) {
        for (let item of data) {
            const set = new Set<T>()
            set.add(item)
            this.dataMap.set(item, set)
        }
    }
    isSame(a: T, b: T): boolean {
        return this.dataMap.get(a) === this.dataMap.get(b)
    }
    union(a: T, b: T): void {
        if (this.isSame(a, b)) {
            return
        }
        let a_set = <Set<T>>this.dataMap.get(a)
        let b_set = <Set<T>>this.dataMap.get(b)
        for (let item of a_set) {
            b_set.add(item)
        }
        for (let item of a_set) {
            this.dataMap.set(item, b_set)
        }
    }
}

class UnionSet<T> {
    private fatherMap = new Map<T, T>()
    constructor(data: T[]) {
        for (let item of data) {
            this.fatherMap.set(item, item)
        }
    }
    isSame(a: T, b: T): boolean {
        return this.getRoot(a) === this.getRoot(b)
    }
    union(a: T, b: T): void {
        let a_root = this.getRoot(a)
        let b_root = this.getRoot(b)
        if (a_root === b_root) return
        this.fatherMap.set(a_root, b_root)
    }
    private getRoot(node: T) {
        const set = new Set<T>()
        let father = <T>this.fatherMap.get(node)
        while (father !== node) {
            set.add(node)
            node = father
            father = <T>this.fatherMap.get(node)
        }
        for (let item of set) {
            this.fatherMap.set(item, father)
        }
        return father
    }
}

export { SimpleUnionSet, UnionSet }
