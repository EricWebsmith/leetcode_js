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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root == null) { return false; }
    let ans = false;

    /**
     * Depth first search
     * @param {TreeNode} root 
     * @param {number} movingSum 
     */
    function dfs(root, movingSum) {
        if (ans) return;

        movingSum += root.val;
        if (root.left == null && root.right == null) {
            if (movingSum === targetSum) {
                ans = true;

            }
            return;
        }


        if (root.left) dfs(root.left, movingSum);
        if (root.right) dfs(root.right, movingSum);
    }

    dfs(root, 0);

    return ans;
};


console.time('timer');
console.log(hasPathSum(null, 0));
console.timeEnd('timer');



/*
Runtime: 68 ms, faster than 99.05% of JavaScript online submissions for Path Sum.
Memory Usage: 45.5 MB, less than 7.45% of JavaScript online submissions for Path Sum.
*/