/**
 * 
 * @param {number} val 
 * @param {TreeNode} left 
 * @param {TreeNode} right 
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    const map = new Map();
    /**
     * 
     * @param {TreeNode} node 
     */
    const dfs = (node) => {
        if (node == null) { return; }
        const count = map.get(node.val) ?? 0;
        map.set(node.val, count + 1);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    let ans = [];
    let maxCount = -1;
    for (const [val, count] of map.entries()) {
        if (count > maxCount) {
            maxCount = count;
            ans = [];
            ans.push(val);
        } else if (count === maxCount) {
            ans.push(val);
        }
    }

    return ans;
};

/**
 * @param {TreeNode} root
 * @param {number[]} expected
 * @returns {void}
 */
function test(root, expected) {
    const actual = findMode(root);
    const result = actual.length === expected.length && actual.every((val, index) => expected.includes(val));
    console.log(result, expected, actual);
}

const root1 = new TreeNode(
    1,
    null,
    new TreeNode(
        2,
        new TreeNode(2, null, null),
        null)
);

test(root1, [2]);

const root2 = new TreeNode(0, null, null);

test(root2, [0]);

const root3 = new TreeNode(1, null, new TreeNode(2, null, null));

test(root3, [2,1]);


/*
Runtime: 80 ms, faster than 99.32% of JavaScript online submissions for Find Mode in Binary Search Tree.
Memory Usage: 51.3 MB, less than 5.12% of JavaScript online submissions for Find Mode in Binary Search Tree.
*/