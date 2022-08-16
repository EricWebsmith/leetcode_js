
const { expect } = require("chai");



class Solution {
    constructor(w) {
        let sum = w.reduce((a,b) => a+b,0)
        this.cumWeights = []
        w.reduce((cum,curr) => {
            let currCum =  curr/sum + cum
            this.cumWeights.push(currCum)
            return currCum
        },0)

        console.log(this.cumWeights)
    }

    /**
     * @return {number}
     */
    pickIndex() {
        let randNo = Math.random()

        let left = 0
        let right = this.cumWeights.length - 1
        let mid = 0
        let rightBorder = this.cumWeights.length - 1
        while (left<=right){
            mid = (right+left) >> 1;
            let curr = this.cumWeights[mid]
            if (randNo < curr){
                rightBorder = mid
                right = mid -1 
            }
            else left = mid + 1
        }
        return rightBorder
    }
}


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */


function test(actions, params, expected) {
    const obj = new Solution(...params[0]);
    for (let i = 1; i < actions.length; i++) {
        switch (actions[i]) {

            case 'pickIndex':
                expect(obj.pickIndex(...params[i]) ?? null).to.be.eql(expected[i]);
                break;

        }
    }
}

describe('528. Random Pick with Weight', () => {
    it('528. 1', () => { test(["Solution", "pickIndex"], [[[1]], []], [null, 0]) });
    it.only('528. 2', () => { test(["Solution", "pickIndex", "pickIndex", "pickIndex", "pickIndex", "pickIndex"], [[[1, 3]], [], [], [], [], []], [null, 1, 1, 1, 1, 0]) });

});
