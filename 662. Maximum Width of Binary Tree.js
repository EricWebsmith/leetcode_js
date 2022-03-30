function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
 function widthOfBinaryTree (root) {
    let q = [];
    let maxWidth = 1;
    let width = 1;

    q.push(root);
    while(q.length>0){

        let newQ = [];
        for(let i=0; i<width;i++){
            if(q[i]){
                newQ.push(q[i].left);
                newQ.push(q[i].right);
            }
            else{
                newQ.push(undefined);
                newQ.push(undefined);
            }
        }

        //prune
        while(newQ.length>0 && !newQ[0]){
            newQ.shift();
        }

        while(newQ.length>0 && !newQ[newQ.length-1]){
            newQ.pop();
        }

        q = newQ;
        maxWidth = Math.max(maxWidth, q.length);
    }    

    return maxWidth;
}


const root1 = new TreeNode(
    1,
    new TreeNode(3,
        new TreeNode(5),
        new TreeNode(3)
        ),
    new TreeNode(2,
        undefined,
        new TreeNode(9)
        )
);


const width1 = widthOfBinaryTree(root1);

console.log(width1);

