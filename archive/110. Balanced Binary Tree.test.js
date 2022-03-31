const {expect} = require('chai');

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function dfs(node) {
    if (!node) {
        return [true, 0];
    }

    const [leftBalanced, leftDepth] = dfs (node.left);
    if (!leftBalanced) {
        return [false, 0];
    }
    const [rightBalanced, rightDepth] = dfs (node.right);
    if (!rightBalanced) {
        return [false, 0];
    }

    const diff = leftDepth - rightDepth;
    const balanced = diff>=-1 && diff<=1;
    const depth = Math.max(leftDepth, rightDepth)+1;
    return [balanced, depth];
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    const [balanced, _] = dfs(root);
    return balanced;
}

/**
 * 
 * @param {TreeNode} root 
 * @param {boolean} expected 
 * @returns {void}
 */
function test(root, expected) {
    const actual = isBalanced(root);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('110. Balanced Binary Tree', () => {
    it('1', () => {
        const root = new TreeNode(
            3, 
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7)
                )
        );
        test(root, true)
    });
    it('2', () => {
        const root = new TreeNode(
            1,
            new TreeNode(
                2,
                new TreeNode(
                    3,
                    new TreeNode(4),
                    new TreeNode(4)
                ),
                new TreeNode(3)
            ),
            new TreeNode(2)
        );
        test(root, false)

    });
    it('3', () => {test(null, true)});
});

/*
Runtime: 72 ms, faster than 94.98% of JavaScript online submissions for Balanced Binary Tree.
Memory Usage: 48.3 MB, less than 18.71% of JavaScript online submissions for Balanced Binary Tree.
*/