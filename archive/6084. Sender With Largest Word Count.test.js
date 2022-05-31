const { expect } = require("chai");

/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
function largestWordCount (messages, senders) {
    const obj = {};
    for (let i=0;i<messages.length;i++) {
        if (!obj.hasOwnProperty(senders[i])) {
            obj[senders[i]] = 0;
        }

        obj[senders[i]] += messages[i].split(' ').length;
    }

    let ans = senders[0];
    let maxCount = 0;
    for (const key of Object.keys(obj)) {
        console.log(key);
        if (obj[key] > maxCount) {
            maxCount = obj[key];
            ans = key;
        }

        if (obj[key] === maxCount && key > ans) {
            ans = key;
        }
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = largestWordCount (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6084. Sender With Largest Word Count', () => {
    it('6084. 1', () => {test(["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], ["Alice","userTwo","userThree","Alice"], "Alice")});
    it('6084. 2', () => {test(["How is leetcode for everyone","Leetcode is useful for practice"], ["Bob","Charlie"], "Charlie")});
    it('6084. 3', () => {test(["tP x M VC h lmD","D X XF w V","sh m Pgl","pN pa","C SL m G Pn v","K z UL B W ee","Yf yo n V U Za f np","j J sk f qr e v t","L Q cJ c J Z jp E","Be a aO","nI c Gb k Y C QS N","Yi Bts","gp No g s VR","py A S sNf","ZS H Bi De dj dsh","ep MA KI Q Ou"],
    ["OXlq","IFGaW","XQPeWJRszU","Gb","HArIr","Gb","FnZd","FnZd","HArIr","OXlq","IFGaW","XQPeWJRszU","EMoUs","Gb","EMoUs","EMoUs"], "FnZd")});
});
