/**
 * 
 * @param {number} val 
 * @param {TreeNode} left 
 * @param {TreeNode} right 
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) { return []; }
    const ans = [];
    let q = [];
    q.push(root);
    while (q.length > 0) {
        const qLen = q.length;
        const subAns = [];
        for (let time = 0; time < qLen; time++) {
            const node = q.shift();
            subAns.push(node.val);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        ans.push(subAns);
    }

    return ans;
};




/**
 * 
 * @param {TreeNode} root 
 * @param {number[][]} expected 
 */
function test(root, expected){
    const actual = levelOrder(root);
    let result = actual.length === expected.length;
    console.log(result, actual);
}

const root1 = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7))
    );

test(root1, [[3],[9,20],[15,7]]);


/*
Runtime: 71 ms, faster than 93.68% of JavaScript online submissions for Binary Tree Level Order Traversal.
Memory Usage: 43.6 MB, less than 11.61% of JavaScript online submissions for Binary Tree Level Order Traversal.
*/