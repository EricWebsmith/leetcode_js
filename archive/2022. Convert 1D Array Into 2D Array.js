/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
    if(original.length != m * n) {
        return [];
    }

    let result = [];
    for(let i = 0; i < m; i ++){
        result.push(original.slice(i *n, (i+1) * n));
        for(let j = 0; j < n; j ++){
            result[i][j] = original[i * n + j];
        }
    }
    return result;
};

console.log(construct2DArray([1,2,3,4], 2, 2));
console.log(construct2DArray([1,2,3], 1, 3));
console.log(construct2DArray([1, 2], 1, 1));
console.log(construct2DArray([3], 1, 2));
