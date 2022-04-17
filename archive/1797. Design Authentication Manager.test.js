const { expect } = require("chai");

class AuthenticationManager {
    /**
     * @param {number} timeToLive
     */
    constructor(timeToLive) {
        this.timeToLive = timeToLive;
        this.dict = new Map();
    }

    /** 
     * @param {string} tokenId 
     * @param {number} currentTime
     * @return {void}
     */
    generate(tokenId, currentTime) {
        this.dict.set(tokenId, currentTime + this.timeToLive);
    }

    /** 
     * @param {string} tokenId 
     * @param {number} currentTime
     * @return {void}
     */
    renew(tokenId, currentTime) {
        this.expire(currentTime);
        if (this.dict.has(tokenId)){
            this.dict.set(tokenId, currentTime + this.timeToLive);
        }
    }

    /** 
     * @param {number} currentTime
     * @return {number}
     */
    countUnexpiredTokens(currentTime) {
        this.expire(currentTime);
        return this.dict.size;
    }

    expire(currentTime) {
        //let count = 0;
        for (const [tokenId, expireTime] of this.dict.entries()) {
            if (expireTime <= currentTime) {
                this.dict.delete(tokenId);
            }
        } 
    }
}

/**
 * 
 * @param {string[]} actions 
 * @param {Array} params 
 */
function test (actions, params, expected) {
    const n = actions.length;
    const authenticationManager = new AuthenticationManager(...params[0]);
    for (let i=1;i<n;i++) {
        //console.log(i);
        switch(actions[i]) {
            case 'generate':
                authenticationManager.generate(...params[i]);
                break;
            case 'renew':
                authenticationManager.renew(...params[i]);
                break;
            case 'countUnexpiredTokens':
                expect(authenticationManager.countUnexpiredTokens(...params[i])).to.be.eql(expected[i]);
                break;
        }
    }
}

describe('1797. Design Authentication Manager', () => {
    it('1797. 1', () => {
        const authenticationManager = new AuthenticationManager(5); // Constructs the AuthenticationManager with timeToLive = 5 seconds.
        authenticationManager.renew("aaa", 1); // No token exists with tokenId "aaa" at time 1, so nothing happens.
        authenticationManager.generate("aaa", 2); // Generates a new token with tokenId "aaa" at time 2.
        // The token with tokenId "aaa" is the only unexpired one at time 6, so return 1.
        expect(authenticationManager.countUnexpiredTokens(6)).to.be.eql(1); 
        authenticationManager.generate("bbb", 7); // Generates a new token with tokenId "bbb" at time 7.
        authenticationManager.renew("aaa", 8); // The token with tokenId "aaa" expired at time 7, and 8 >= 7, so at time 8 the renew request is ignored, and nothing happens.
        authenticationManager.renew("bbb", 10); // The token with tokenId "bbb" is unexpired at time 10, so the renew request is fulfilled and now the token will expire at time 15.
        // The token with tokenId "bbb" expires at time 15, and the token with tokenId "aaa" expired at time 7, so currently no token is unexpired, so return 0.
        expect(authenticationManager.countUnexpiredTokens(15)).to.be.eql(0); 
    });

    it('1797. 2', () => {
        const authenticationManager = new AuthenticationManager(28);
        expect(authenticationManager.countUnexpiredTokens(2)).to.be.eql(0); 
        authenticationManager.renew("xokiw", 6);
        authenticationManager.generate("ofn", 7); 
        authenticationManager.renew("dses", 15);
        expect(authenticationManager.countUnexpiredTokens(17)).to.be.eql(1); 
        authenticationManager.renew("ofzu", 19);
        authenticationManager.generate("dses", 20);
        expect(authenticationManager.countUnexpiredTokens(23)).to.be.eql(2); 
        expect(authenticationManager.countUnexpiredTokens(27)).to.be.eql(2); 
        expect(authenticationManager.countUnexpiredTokens(30)).to.be.eql(2); 
    });

    it('1797. 3', () => {test(
        ["AuthenticationManager","generate","countUnexpiredTokens","countUnexpiredTokens","renew","countUnexpiredTokens","countUnexpiredTokens","countUnexpiredTokens","countUnexpiredTokens","generate","countUnexpiredTokens","countUnexpiredTokens","renew","countUnexpiredTokens","countUnexpiredTokens","renew","renew","countUnexpiredTokens","generate","countUnexpiredTokens","generate","renew","countUnexpiredTokens","countUnexpiredTokens","countUnexpiredTokens","countUnexpiredTokens","renew","renew","renew","generate","countUnexpiredTokens","renew","renew","generate","countUnexpiredTokens","generate","countUnexpiredTokens","countUnexpiredTokens","generate","generate","renew","countUnexpiredTokens","generate","renew","renew","renew","generate","generate","countUnexpiredTokens","countUnexpiredTokens","generate","renew","renew","generate","countUnexpiredTokens","countUnexpiredTokens","renew","countUnexpiredTokens","countUnexpiredTokens","countUnexpiredTokens","generate"],
        [[444],["jvkl",16],[41],[53],["qvgq",88],[101],[119],[126],[137],["nesq",150],[161],[167],["ix",179],[181],[185],["kh",195],["rk",196],[197],["rrbox",207],[218],["wpqr",240],["prj",274],[296],[298],[320],[336],["d",339],["z",343],["ri",354],["fkpk",404],[429],["ix",434],["ytqq",506],["fqlu",519],[562],["wxmcw",578],[594],[619],["iz",623],["zaqb",629],["ugxe",640],[664],["smeb",665],["z",673],["rihj",674],["qikse",717],["rnizc",735],["ugxe",791],[803],[815],["jnofa",851],["ryp",857],["jvkl",862],["l",863],[871],[873],["ugxe",875],[902],[913],[979],["dqad",984]],
        [null,null,1,1,null,1,1,1,1,null,
            2,2,null,2,2,null,null,2,null,3,
            null,null,4,4,4,4,null,null,null,null,
            5,null,null,null,5,null,5,5,null,null,
            null,6,null,null,null,null,null,null,8,8,null,null,null,null,9,9,null,9,9,8,null]
    )});
    //it('1797. 3', () => {test()});
});


/*
Runtime: 161 ms, faster than 88.89% of JavaScript online submissions for Design Authentication Manager.
Memory Usage: 53.5 MB, less than 61.11% of JavaScript online submissions for Design Authentication Manager.
*/