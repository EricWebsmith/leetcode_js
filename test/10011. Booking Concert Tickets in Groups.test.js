const { expect } = require("chai");
const { max } = require("lodash");


class BookMyShow {
    
    constructor (n, m) {
        this.n = n;
        this.m = m;
        this.rows = [];
        for (let r=0;r<n;r++) {
            this.rows.push(m);
        }
    }

    /** 
     * @param {number} k 
     * @param {number} maxRow
     * @return {number[]}
     */
    gather(k, maxRow) {
        for (let r=0;r<=maxRow;r++) {
            if (this.rows[r]>=k) {
                const c = this.m - this.rows[r];
                this.rows[r] -= k;
                return [r,c]
            }
        }
        return [];
    }

    /** 
     * @param {number} k 
     * @param {number} maxRow
     * @return {boolean}
     */
    scatter(k, maxRow) {
        let feeSeats = 0;
        for (let r=0;r<=maxRow;r++) {
            feeSeats+=this.rows[r];
        }

        if (feeSeats<k) {
            return false;
        }

        for (let r=0;r<=maxRow;r++) {
            if (k > this.rows[r]) {
                k -= this.rows[r];
                this.rows[r] = 0;
            } else {
                this.rows[r] -= k;
                return true;
            }
        }
    }
}

/**
 * 
 * @param {string[]} actions 
 * @param {Array} params 
 * @param {Array} expected 
 */
function test(actions, params, expected) {
    const bookingSystem = new BookMyShow(...params[0]);
    for (let i=1;i<actions.length;i++) {
        switch(actions[i]) {
            case 'gather':
                expect(bookingSystem.gather(...params[i])).to.be.eql(expected[i]);
                break;
            case 'scatter':
                expect(bookingSystem.scatter(...params[i])).to.be.eql(expected[i]);
                break;
        }
    }
}


describe('10011. Booking Concert Tickets in Groups', () => {
    it('10011. 1', () => {test(["BookMyShow", "gather", "gather", "scatter", "scatter"], [[2, 5], [4, 0], [2, 0], [5, 1], [5, 1]], [null, [0, 0], [], true, false]);});
    it('10011. 2', () => {test(["BookMyShow","gather","scatter","gather","gather","gather"], 
    [[5,9],[10,1],[3,3],[9,1],[10,2],[2,0]], 
    [null,[],true,[1,0],[],[0,3]]);});
});
 