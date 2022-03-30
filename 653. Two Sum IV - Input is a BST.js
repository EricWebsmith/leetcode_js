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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {

    let ans = false;

    /**
     * @param {number} val 
     * @returns {boolean}
     */
    function find(val){
        let current = root;
        while(current){
            if(current.val == val){
                return true;
            } else if(current.val<val){
                current = current.right;
            } else{
                current = current.left;
            }
        }

        return false;
    }

    /**
     * @param {TreeNode} node
     * @returns {void}
     */
    function dfs(node){
        if(node == null){return;}
        
        const target = k-node.val;
        if(target !== node.val && find(target)){
            ans = true;
            return
        }
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return ans;

};

/*
Runtime: 84 ms, faster than 99.52% of JavaScript online submissions for Two Sum IV - Input is a BST.
Memory Usage: 51.6 MB, less than 9.77% of JavaScript online submissions for Two Sum IV - Input is a BST.
*/