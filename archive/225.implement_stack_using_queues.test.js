const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');


class MyStack {
    constructor() {
        this.queue1 = new Queue;
        this.queue2 = new Queue;
    }

    /** 
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if (this.isPop) {
            this.switch();
        }

        this.queue2.enqueue(x);
        while (this.queue1.size() > 0) {
            this.queue2.enqueue(this.queue1.dequeue());
        }
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    /** @return {number} */
    pop() {
        return this.queue1.dequeue();
    }

    /** @return {number} */
    top() {
        return this.queue1.front();
    }

    /** @return {boolean} */
    empty() {
        return this.queue1.size() === 0;
    }
}

function test(actions, params, outputs) {

    const myStack = new MyStack();
    for(let i=1;i<actions.length;i++) {
        console.log(actions[i]);
        switch(actions[i]) {
            case 'push':
                myStack.push(...params[i]);
                break;
            case 'pop':
                expect(myStack.pop(...params[i])).to.be.equal(outputs[i]);
                break;
            case 'top':
                expect(myStack.top(...params[i])).to.be.equal(outputs[i]);
                break;
            case 'empty':
                expect(myStack.empty(...params[i])).to.be.equal(outputs[i]);
                break;
        }
    }
}

describe('1679. Max Number of K-Sum Pairs', () => {
    it('1679. 1', () => {test(["MyStack", "push", "push", "top", "pop", "empty"], [[], [1], [2], [], [], []], [null, null, null, 2, 2, false])});
    it('1679. 2', () => {test(["MyStack","empty"], [[],[]], [null,true])});
    //it('844. 3', () => {test(false, "a#c", "b")});
});


/*
Runtime: 51 ms, faster than 98.17% of JavaScript online submissions for Implement Stack using Queues.
Memory Usage: 41.9 MB, less than 61.33% of JavaScript online submissions for Implement Stack using Queues.
*/