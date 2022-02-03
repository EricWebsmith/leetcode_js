/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let row = 0;
    let col = n - 1;
    while(row<m && col>=0){
        const current = matrix[row][col];
        if(current === target){
            return true;
        }
        else if(current<target){
            row++;
        }
        else{
            col--;
        }
    }

    return false;
};