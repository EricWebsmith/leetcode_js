
const { expect } = require("chai");
const _ = require('lodash');


/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
    if (s.length>12) {return [];}
    const cache = new Map();

    const validPart = (part) => {
        if (cache.has(part)) {
            return cache[part];
        }

        const result = part.match(/^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/)?true:false;
        cache[part] = result;
        return result;
    }

    const ans = [];
    for (let l1 = 1; l1 <= 3 && l1 <= s.length; l1++) {
        const part1 = s.substring(0, l1);
        if (!validPart(part1)) {
            continue;
        }
        for (let l2 = 1; l2 <= 3 && l1 + l2 <= s.length; l2++) {
            const part2 = s.substring(l1, l2 + l1);
            if (!validPart(part2)) {
                continue;
            }
            for (let l3 = 1; l3 <= 3 && l1 + l2 + l3 <= s.length; l3++) {
                const part3 = s.substring(l1 + l2, l1 + l2 + l3);
                if (!validPart(part3)) {
                    continue;
                }

                const part4 = s.substring(l1 + l2 + l3);
                if (!validPart(part4)) {
                    continue;
                }
                ans.push(`${part1}.${part2}.${part3}.${part4}`);

            }
        }
    }

    return ans;
}


function test(s, expected) {
    const actual = restoreIpAddresses(s);
    expect(actual).to.have.members(expected);
}

describe('93. Restore IP Addresses', () => {
    it('93. 1', () => { test("25525511135", ["255.255.11.135", "255.255.111.35"]) });
    it('93. 2', () => { test("0000", ["0.0.0.0"]) });
    it('93. 3', () => { test("101023", ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]) });
});

/*
Runtime: 78 ms, faster than 81.23% of JavaScript online submissions for Restore IP Addresses.
Memory Usage: 43.5 MB, less than 57.11% of JavaScript online submissions for Restore IP Addresses.
*/