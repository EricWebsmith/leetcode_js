class UnionFind {
    /** @param {number} n  */
    constructor(n) {
        const ufArray = [];
        for (let i = 0; i < n; i++) {
            ufArray.push(i);
        }
        this.ufArray = ufArray;
    }

    /** @param {number} x  @returns {number} */
    find(x) {
        if (this.ufArray[x] !== x) {
            this.ufArray[x] = this.find(this.ufArray[x]);
        }

        return this.ufArray[x];
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {void}
     */
    union(x, y) {
        const px = this.find(x);
        const py = this.find(y);
        if (px === py) {
            return;
        }

        if (px < py) {
            this.ufArray[py] = px;
        } else {
            this.ufArray[px] = py;
        }
    }


    countGroups() {
        let groups = 0;
        for (let i = 0; i < this.ufArray.length; i++) {
            if (this.ufArray[i] === i) {
                groups++;
            }
        }

        return groups;
    }
}