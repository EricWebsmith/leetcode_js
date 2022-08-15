
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
function minimumDeleteSum(s1, s2) {
    const n1 = s1.length;
    const n2 = s2.length;
    // sl is vertical
    // s2 is horizontal
    // n1 rows and n2 cols.
    const dp = [];
    for (let r = 0; r <= n1; r++) {
        dp.push(new Array(n2+1).fill(0))
    }

    // first row
    let rsum = 0;
    for (let c = 0; c < n2; c++) {
        rsum += s2.charCodeAt(c);
        dp[0][c+1] = rsum;
    }

    // // first col
    let csum = 0;
    for (let r = 0; r < n1; r++) {
        csum += s1.charCodeAt(r);
        dp[r+1][0] = csum;
    }

    // rows
    for (let r = 1; r <= n1; r++) {
        found = 0;
        for (let c = 1; c <= n2; c++) {
            if (s1[r-1] === s2[c-1]) {
                dp[r][c] = dp[r-1][c-1];
            } else {
                dp[r][c] =Math.min(dp[r-1][c]+s1.charCodeAt(r-1), dp[r][c-1]+s2.charCodeAt(c-1));
            }
        }
    }

    return dp[n1][n2];
}


function test(s1, s2, expected) {

    const actual = minimumDeleteSum(s1, s2);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('712. Minimum ASCII Delete Sum for Two Strings', () => {
    it('712. 1', () => { test("sea", "eat", 231) });
    it('712. 2', () => { test("delete", "leet", 403) });
    it('712. 3', () => { test("a", "at", 116) });
    it('712. 4', () => {
        test(
            "igijekdtywibepwonjbwykkqmrgmtybwhwjiqudxmnniskqjfbkpcxukrablqmwjndlhblxflgehddrvwfacarwkcpmcfqnajqfxyqwiugztocqzuikamtvmbjrypfqvzqiwooewpzcpwhdejmuahqtukistxgfafrymoaodtluaexucnndlnpeszdfsvfofdylcicrrevjggasrgdhwdgjwcchyanodmzmuqeupnpnsmdkcfszznklqjhjqaboikughrnxxggbfyjriuvdsusvmhiaszicfa",
            "ikhuivqorirphlzqgcruwirpewbjgrjtugwpnkbrdfufjsmgzzjespzdcdjcoioaqybciofdzbdieegetnogoibbwfielwungehetanktjqjrddkrnsxvdmehaeyrpzxrxkhlepdgpwhgpnaatkzbxbnopecfkxoekcdntjyrmmvppcxcgquhomcsltiqzqzmkloomvfayxhawlyqxnsbyskjtzxiyrsaobbnjpgzmetpqvscyycutdkpjpzfokvi",
            41731)
    });

});


/*
Runtime: 164 ms, faster than 60.00% of JavaScript online submissions for Minimum ASCII Delete Sum for Two Strings.
Memory Usage: 49.7 MB, less than 55.56% of JavaScript online submissions for Minimum ASCII Delete Sum for Two Strings.
*/