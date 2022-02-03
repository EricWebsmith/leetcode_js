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
var postorderTraversal = function (root) {
    if (root == null) {
        return [];
    }

    return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat([root.val]);
};

/*
Runtime: 56 ms, faster than 99.57% of JavaScript online submissions for Binary Tree Postorder Traversal.
Memory Usage: 42.4 MB, less than 5.64% of JavaScript online submissions for Binary Tree Postorder Traversal.
 */