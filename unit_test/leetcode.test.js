/* eslint-disable max-len */
// put it to test/ when using.
const {expect} = require('chai');
const _ = require('lodash');
const {Node, array2Node, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array} = require('../leetcode');

describe('Node', () => {
    it('Node 1', () => {
        const arr = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14];
        const actual = array2Node(arr);
        const expected = {
            'val': 1,
            'children': [
                {
                    'val': 2,
                    'children': [],
                },
                {
                    'val': 3,
                    'children': [
                        {
                            'val': 6,
                            'children': [],
                        },
                        {
                            'val': 7,
                            'children': [
                                {
                                    'val': 11,
                                    'children': [
                                        {
                                            'val': 14,
                                            'children': [],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    'val': 4,
                    'children': [
                        {
                            'val': 8,
                            'children': [
                                {
                                    'val': 12,
                                    'children': [],
                                },
                            ],
                        },
                    ],
                },
                {
                    'val': 5,
                    'children': [
                        {
                            'val': 9,
                            'children': [
                                {
                                    'val': 13,
                                    'children': [],
                                },
                            ],
                        },
                        {
                            'val': 10,
                            'children': [],
                        },
                    ],
                },
            ],
        };
        expect(actual).to.be.deep.equal(expected);
    });

    it('Node 2', () => {
        const arr = [1, null, 3, 2, 4, null, 5, 6];
        const actual = array2Node(arr);
        const expected = {
            'val': 1,
            'children': [
                {
                    'val': 3,
                    'children': [
                        {
                            'val': 5,
                            'children': [],
                        },
                        {
                            'val': 6,
                            'children': [],
                        },
                    ],
                },
                {
                    'val': 2,
                    'children': [],
                },
                {
                    'val': 4,
                    'children': [],
                },
            ],
        };
        expect(actual).to.be.deep.equal(expected);
    });

    it('Node 3', () => {
        const arr = [];
        const actual = array2Node(arr);
        expect(actual).to.be.null;
    });
});

describe('TreeNode', () => {
    it('TreeNode 1', () => {
        const expected = [];
        const root = array2TreeNode(expected);
        const actual = treeNode2Array(root);
        expect(actual).to.be.eql(expected);
    });


    it('TreeNode 2', () => {
        const expected = [1, 0, 2];
        const root = array2TreeNode(expected);
        const actual = treeNode2Array(root);
        expect(actual).to.be.eql(expected);
    });
});
