
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * 
 * @param {TreeNode} root 
 * @returns {number[]}
 */
function inorderTraverse(root){
    if(root == null){
        return [];
    }

    return inorderTraverse(root.left).concat([root.val]).concat(inorderTraverse(root.right));
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    const arr = [];

    function inorderTraverse(node){
        if(node == null){
            return;
        }

        inorderTraverse(node.left);
        arr.push(node.val);
        inorderTraverse(node.right);
    }

    inorderTraverse(root)

    let min = arr[1] - arr[0];
    for(let i=2;i<arr.length;i++){
        min = Math.min(min, arr[i]-arr[i-1]);
    }

    return min;
};

/*
Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Minimum Absolute Difference in BST.
Memory Usage: 48.8 MB, less than 5.21% of JavaScript online submissions for Minimum Absolute Difference in BST.
*/