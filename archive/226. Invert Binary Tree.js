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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root == null) { return root; }
    const t = root.left;
    root.left = root.right;
    root.right = t;
    invertTree(root.left); 
    invertTree(root.right);
    return root;
};

/*
Runtime: 74 ms, faster than 76.73% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 42.4 MB, less than 5.03% of JavaScript online submissions for Invert Binary Tree.
*/