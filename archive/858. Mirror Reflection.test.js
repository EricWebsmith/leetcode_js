
const { expect } = require("chai");

/**
 * ext * p = ref = q
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
function mirrorReflection(p, q) {
    let ext = q;
    let ref = p;
    while (ext % 2 === 0 && ref % 2 === 0) {
        ext /= 2;
        ref /= 2;
    }

    ext%=2;
    ref%=2;

    if (ext===1 && ref===1){
        return 1;
    }

    if(ext===1 && ref === 0) {
        return 2;
    }

    if(ext ===0 && ref===1) {
        return 0;
    }

    return -1;
}


function test(p, q, expected) {

    const actual = mirrorReflection(p, q);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('858. Mirror Reflection', () => {
    it('858. 1', () => { test(2, 1, 2) });
    it('858. 2', () => { test(3, 1, 1) });
    it('858. 3', () => { test(4, 3, 2) });

});


/*
Runtime: 63 ms, faster than 100.00% of JavaScript online submissions for Mirror Reflection.
Memory Usage: 41.6 MB, less than 100.00% of JavaScript online submissions for Mirror Reflection.
*/