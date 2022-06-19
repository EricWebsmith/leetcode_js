
const { expect } = require("chai");

class Vector2D {
    /**
     * @param {number[][]} vec
     */
    constructor(vec) {
        this.vec = vec;
        this.it = this.generate();
        this.result = this.it.next();
    }

    * generate() {
        for (const row of this.vec) {
            for (const v of row) {
                yield v;
            }
        }
    }

    checkNext () {
        
    }

    /**
     * @return {number}
     */
    next() {
        const ans = this.result.value;
        this.result = this.it.next();
        return ans;
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return !this.result.done;
    }
}

/**
 * 
 * @param {string[]} actions 
 * @param {Array} params 
 * @param {Array} expected 
 */
function test(actions, params, expected) {
    const obj = new Vector2D(...params[0]);
    for (let i = 1; i < actions.length; i++) {
        switch (actions[i]) {
            case 'hasNext':
                expect(obj.hasNext(...params[i])).to.be.eql(expected[i]);
                break;
            case 'next':
                expect(obj.next(...params[i])).to.be.eql(expected[i]);
                break;

        }
    }
}

describe('251. Flatten 2D Vector', () => {
    it('251. 1', () => { test(["Vector2D", "next", "next", "next", "hasNext", "hasNext", "next", "hasNext"], [[[[1, 2], [3], [4]]], [], [], [], [], [], [], []], [null, 1, 2, 3, true, true, 4, false]) });
});

/*
Runtime: 121 ms, faster than 88.07% of JavaScript online submissions for Flatten 2D Vector.
Memory Usage: 53.5 MB, less than 56.88% of JavaScript online submissions for Flatten 2D Vector.
*/