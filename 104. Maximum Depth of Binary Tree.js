/**
 * 
 * @param {number} val value of the node
 * @param {TreeNode} left left child node
 * @param {TreeNode} right right child node
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root tree
 * @return {number} depth
 */
var maxDepth = function (root) {
    if (root == null) { return 0; }
    return Math.max(maxDepth(root.left)+1, maxDepth(root.right)+1);
};


/*
Runtime: 72 ms, faster than 96.44% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 44.9 MB, less than 6.64% of JavaScript online submissions for Maximum Depth of Binary Tree.
*/