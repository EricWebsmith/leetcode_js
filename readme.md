# Array
for an array, pop/push is faster than shift/unshift. Because of re-indexing.

# Binary Tree

When traversing a tree, it is 3 times faster to use a global array. I guess that is because we no longer create a lot of arrays.

```javascript
var BSTIterator = function (root) {
    this.arr = [];
    this.index = -1;
    const dfs = (node) => {
        if(node === null) return;
        dfs(node.left);
        this.arr.push(node.val);
        dfs(node.right);
    };
    dfs(root);
};
```

This is based on `1586. Binary Search Tree Iterator II`

