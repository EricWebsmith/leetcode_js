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
 * 
 * @param {TreeNode} left 
 * @param {TreeNode} right 
 * @returns {boolean}
 */
 const areSymmetric = function (left, right) {
    if (left == null && right == null) {
        return true;
    } else if (left == null || right == null) {
        return false;
    } else if (left.val !== right.val) {
        return false;
    }

    return areSymmetric(left.left, right.right) && areSymmetric(left.right, right.left);

};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return areSymmetric(root.left, root.right);
};


/*
Runtime: 64 ms, faster than 99.76% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 44.9 MB, less than 5.56% of JavaScript online submissions for Symmetric Tree.
*/
