function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root 
 * @return {number[]}
 */
function Tree2Arr(root) {
    if (!root) {
        return [];
    }

    return Tree2Arr(root.left).concat([root.val]).concat(Tree2Arr(root.right));
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    const arr1 = Tree2Arr(root1);
    const arr2 = Tree2Arr(root2);
    const ans = [];
    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1[0] === undefined) {
            ans.push(arr2.shift());
        }
        else if (arr2[0] === undefined) {
            ans.push(arr1.shift());
        }
        else if (arr1[0] < arr2[0]) {
            ans.push(arr1.shift());
        }
        else {
            ans.push(arr2.shift());
        }
    }

    return ans;
};

function test(root1, root2, expected) {
    const actual = getAllElements(root1, root2);
    const result = actual.length === expected.length;
    if (result) {
        for (let i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                result = false;
                break;
            }
        }
    }

    console.log(result, actual);

}

const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(4);

const root2 = new TreeNode(1);
root2.left = new TreeNode(0);
root2.right = new TreeNode(3);


test(root1, root2, [0, 1, 1, 2, 3, 4]);

//test(root1 = [2,1,4], root2 = [1,0,3], expected = [0,1,1,2,3,4]);