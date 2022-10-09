/* eslint-disable max-len */
const {expect} = require('chai');


class SegmentNode {
    /**
     *
     * @param {number} low
     * @param {number} hight
     * @param {number} count
     */
    constructor(low, high, count) {
        this.low = low;
        this.high= high;
        this.count = count;
        this.split = -1;
        /** @type {SegmentNode} */
        this.left = null;
        /** @type {SegmentNode} */
        this.right = null;
    }

    toString() {
        return `[${this.low}, ${this.high}], ${this.count}`;
    }
}


class MyCalendarThree {
    constructor() {
        this.root = new SegmentNode(0, 1000000000, 0);
        this.max = 0;
    }

    /**
     * @param {number} start
     * @param {number} end
     * @return {number}
     */
    book(start, end) {
        this.add(start, end, this.root);
        return this.max;
    }

    /**
     *
     * @param {number} start
     * @param {number} end
     * @param {SegmentNode} node
     */
    add(start, end, node) {
        if (node.split !== -1) {
            if (end<=node.split) {
                this.add(start, end, node.left);
            } else if (start >= node.split) {
                this.add(start, end, node.right);
            } else {
                this.add(start, node.split, node.left);
                this.add(node.split, end, node.right);
            }
            return;
        }

        if (start === node.low && end === node.high) {
            node.count++;
            this.max = Math.max(this.max, node.count);
        } else if (start === node.low) {
            node.split = end;
            node.left = new SegmentNode(node.low, node.split, node.count+1);
            node.right = new SegmentNode(node.split, node.high, node.count);
            this.max = Math.max(this.max, node.count + 1);
        } else if (end === node.high) {
            node.split = start;
            node.left = new SegmentNode(node.low, node.split, node.count);
            node.right = new SegmentNode(node.split, node.high, node.count+1);
            this.max = Math.max(this.max, node.count+1);
        } else {
            node.split = start;
            node.left = new SegmentNode(node.low, node.split, node.count);
            node.right = new SegmentNode(node.split, node.high, node.count);
            this.add(start, end, node.right);
        }
    }
}


/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */


function test(actions, params, expected) {
    const obj = new MyCalendarThree(...params[0]);
    for (let i=1; i<actions.length; i++) {
        // console.log(i, actions[i], expected[i]);
        switch (actions[i]) {
            case 'book':
                expect(obj.book(...params[i])??null).to.be.eql(expected[i]);
                break;
        }
    }
}

describe('732. My Calendar III', () => {
    it('732. 1', () => {
test(['MyCalendarThree', 'book', 'book', 'book', 'book', 'book', 'book'], [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]], [null, 1, 1, 2, 3, 3, 3]);
});
});

/*
249ms, 92.86%
*/
