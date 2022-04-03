const { expect } = require("chai");
const _ = require('lodash');

function func () {

}

function test(nums, expected) {
    const actual = func (nums);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('-------------', () => {
    it('1', () => {test()});
    it('2', () => {test()});
    it('3', () => {test()});
});