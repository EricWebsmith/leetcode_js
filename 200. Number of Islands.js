/**
 * @param {string[][]} grid
 * @return {number}
 */
function numIslands(grid) {

    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from(Array(m), () => new Array(m).fill(false));
    let ans = 0;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r === m || c === n || grid[r][c] === '0' || visited[r][c]) {
            return;
        }

        visited[r][c] = true;

        dfs(r - 1, c);
        dfs(r, c - 1);
        dfs(r + 1, c);
        dfs(r, c + 1);
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === '0') { continue; }
            if (visited[r][c]) { continue; }
            ans++;
            dfs(r, c);
        }
    }

    return ans;
}

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ])===1);


console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
])===3);

/*
Runtime: 76 ms, faster than 96.59% of JavaScript online submissions for Number of Islands.
Memory Usage: 45.9 MB, less than 46.66% of JavaScript online submissions for Number of Islands.
*/