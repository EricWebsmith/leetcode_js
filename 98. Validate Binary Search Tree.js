
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    const max = Number.MAX_SAFE_INTEGER;
    const min = Number.MIN_SAFE_INTEGER;
    let ans = true;

    /**
     * 
     * @param {TreeNode} node 
     * @param {number} max 
     * @param {number} min 
     * @returns {void}
     */
    function dfs(node, max, min){
        if(node.val>=max || node.val<=min){
            ans = false;
            return;
        }

        if(node.left){
            dfs(node.left, node.val, min);
        }

        if(node.right){
            dfs(node.right, max, node.val);
        }
    }

    dfs(root, max, min);
    return ans;
};

/*
Runtime: 64 ms, faster than 99.83% of JavaScript online submissions for Validate Binary Search Tree.
Memory Usage: 46.2 MB, less than 11.57% of JavaScript online submissions for Validate Binary Search Tree.
*/