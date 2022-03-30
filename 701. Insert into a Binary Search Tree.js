
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    const newNode = new TreeNode(val);
    if (root == null) { return newNode; }
    let current = root;
    while (true) {
        if (current.val > val) {
            if(current.left){
                current = current.left
            } else{
                current.left = newNode;
                break;
            }
        } else {
            if(current.right){
                current = current.right
            } else{
                current.right = newNode;
                break;
            }
        }
    }

    return root;
};

/*
Runtime: 116 ms, faster than 95.94% of JavaScript online submissions for Insert into a Binary Search Tree.
Memory Usage: 50.1 MB, less than 58.60% of JavaScript online submissions for Insert into a Binary Search Tree.
*/