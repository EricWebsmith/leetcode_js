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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (root == null) {
        return [];
    }

    return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));
};