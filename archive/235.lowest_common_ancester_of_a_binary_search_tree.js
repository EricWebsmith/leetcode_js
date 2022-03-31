
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    node = root;
    if (p.val > q.val)
    {
        let temp = p;
        p = q;
        q = temp;
    }

    while(node!=null){
        if(p.val == node.val){
            return p;
        }
        if(q.val == node.val){
            return q;
        }

        if(p.val < node.val && q.val > node.val){
            return node;
        }

        if(p.val< node.val){
            node = node.left;
        }
        else{
            node = node.right;
        }
    }

    return root;
};

root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);

console.log(lowestCommonAncestor(root, root.left, root.right), 6) ;
console.log(lowestCommonAncestor(root, root.left, new TreeNode(4)), 2) ;