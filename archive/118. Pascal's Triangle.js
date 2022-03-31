/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const ans = [[1]];
    if (numRows == 1) { return ans; }
    let previous = ans[0];
    for(let i = 1;i<numRows;i++){
        const current = [1];
        for(let j=0;j<previous.length-1;j++){
            const newNumber = previous[j] + previous[j+1];
            current.push(newNumber);
        }
        current.push(1);
        ans.push(current);
        previous = current;
    }

    return ans;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(5));