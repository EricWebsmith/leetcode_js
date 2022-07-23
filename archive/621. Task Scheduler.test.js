
const { expect } = require("chai");

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const counter = {};
    for (const task of tasks) {
        counter.hasProperty
        if (!counter.hasOwnProperty(task)) {
            counter[task] = 0;
        }
        counter[task]++;
    }

    const frequencies = Object.values(counter);
    frequencies.sort((a, b)=>b-a);
    const max_f = frequencies[0];

    let idleTime = (max_f-1) * n;
    for(let i=1;i<frequencies.length;i++) {
        idleTime -= Math.min(max_f-1, frequencies[i]);
        if (idleTime<=0) {
            break;
        }
    }

    return idleTime>0? idleTime+tasks.length: tasks.length;
}


function test(...args) {
    const expected = args.pop();
    const actual = leastInterval (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('621. Task Scheduler', () => {
    it('621. 1', () => {test( ["A","A","A","B","B","B"], 2,  8)});
    it('621. 2', () => {test( ["A","A","A","B","B","B"], 0,  6)});
    it('621. 3', () => {test( ["A","A","A","A","A","A","B","C","D","E","F","G"], 2,  16)});

});


/*
Runtime: 108 ms, faster than 91.23% of JavaScript online submissions for Task Scheduler.
Memory Usage: 46.1 MB, less than 69.78% of JavaScript online submissions for Task Scheduler.
*/
