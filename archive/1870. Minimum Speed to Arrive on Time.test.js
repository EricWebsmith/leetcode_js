
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
function minSpeedOnTime(dist, hour) {
    const n = dist.length;
    if (hour<=n-1) {
        return -1;
    }

    function getTime(speed) {
        let time = 0;
        for (let i=0;i<n-1;i++) {
            time+=Math.ceil(dist[i]/speed);
        }

        time+= dist[n-1]/speed;

        return time;
    }

    let l = 1;
    let r = _.max(dist);
    if(hour<n) {
        let lastTrainSpeed = Math.ceil(dist[n-1] / (hour - n + 1)) 
        r = Math.max(r, lastTrainSpeed);
    }



    while(l<r) {
        const mid = (l+r) >>> 1;
        if(getTime(mid)>hour) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l;
}


function test(dist, hour, expected) {
    
    const actual = minSpeedOnTime(dist, hour);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1870. Minimum Speed to Arrive on Time', () => {
    it('1870. 1', () => {test( [1,3,2], 6,  1)});
    it('1870. 2', () => {test( [1,3,2], 2.7,  3)});
    it('1870. 3', () => {test( [1,3,2], 1.9,  -1)});
    it('1870. 4', () => {test( [1,1,1e5], 2.01, 1e7)});
    it('1870. 5', () => {test( [9,5,10,6,10], 16.75, 3)});
   
});


/*
Runtime: 159 ms, faster than 97.78% of JavaScript online submissions for Minimum Speed to Arrive on Time.
Memory Usage: 54.3 MB, less than 25.56% of JavaScript online submissions for Minimum Speed to Arrive on Time.
*/