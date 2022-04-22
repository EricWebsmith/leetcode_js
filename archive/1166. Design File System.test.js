const { expect } = require("chai");


class FileSystem {
    constructor () {
        this.valueSymbol = Symbol('value');
        this.obj = {};
    }

    /**
     * 
     * @param {string} path 
     * @param {number} value 
     * @returns {boolean}
     */
    createPath(path, value) {
        const parts = path.substring(1).split('/');
        const n = parts.length;
        let current = this.obj;
        for (let i=0;i< n - 1;i++) {
            if (!current[parts[i]]) {
                return false;
            }
            current = current[parts[i]];
        }

        if (current.hasOwnProperty(parts[n-1])) {
            return false;
        }
        current[parts[n-1]] = {};
        current[parts[n-1]][this.valueSymbol] = value;
        return true;
    }

    /**
     * 
     * @param {string} path 
     * @returns {number}
     */
    get(path) {
        const parts = path.substring(1).split('/');
        const n = parts.length;
        let current = this.obj;
        for (let i=0;i< n;i++) {
            if (!current[parts[i]]) {
                return -1;
            }

            current = current[parts[i]];
        }
        return current[this.valueSymbol];
    }
}

/**
 * 
 * @param {string[]} actions 
 * @param {Array} params 
 * @param {Array} expected 
 */
function test(actions, params, expected) {
    const fs = new FileSystem();
    for (let i=1;i<actions.length;i++) {
        switch(actions[i]) {
            case 'createPath':
                expect(fs.createPath(...params[i])).to.be.eql(expected[i]);
                break;
            case 'get':
                expect(fs.get(...params[i])).to.be.eql(expected[i]);
                break;
        }
    }
}


describe('1166. Design File System', () => {
    it('1166. 1', () => {test(["FileSystem","createPath","get"], [[],["/a",1],["/a"]], [null,true,1])});
    it('1166. 2', () => {test(["FileSystem","createPath","createPath","get","createPath","get"], [[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]], [null,true,true,2,false,-1])});
    it('1166. 3', () => {test(["FileSystem","createPath","createPath","get","createPath","get"],
     [[],["/leet",1],["/leet/code",2],["/leet/code"],["/leet/code",3],["/leet/code"]],
     [null,true,true,2,false,2])});
});


/*
Runtime: 284 ms, faster than 76.56% of JavaScript online submissions for Design File System.
Memory Usage: 63.4 MB, less than 75.00% of JavaScript online submissions for Design File System.
*/