# How do I use scrap.js?
Open the following url from chrome to check the following two variable

> chrome://settings/cookies/detail?site=leetcode.com

Open your `.env` file, Copy CSRFTOKEN and COOKIES

My .env is like that:

```bash
X_CSRFTOKEN="vRWCSGGEA5El...rzGApbxbGcviJ"
COOKIES="csrftoken=vRWCSGGEA5El.....x8mPT3jV9hgiQ"
```

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

# Language Support
https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-

