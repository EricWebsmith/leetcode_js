/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const set = new Set();
    // rows
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            if(board[r][c]==='.'){
                continue;
            }
            if(set.has(board[r][c])){
                return false;
            }
            set.add(board[r][c]);
        }
        set.clear();
    }

    // columns
    for(let c=0;c<9;c++){
        for(let r=0;r<9;r++){
            if(board[r][c]==='.'){
                continue;
            }
            if(set.has(board[r][c])){
                return false;
            }
            set.add(board[r][c]);
        }
        set.clear();
    }

    // 3 * 3
    for(let r = 0;r<9;r+=3){
        for(let c=0;c<9;c+=3){
            if(!threeByThree(r, c, board)){
                return false;
            }
        }
    }

    return true;
};

/**
 * @param {number} rowStart
 * @param {number} colStart
 * @param {character[][]} board
 * @return {boolean}
 */
function threeByThree(rowStart, colStart, board){
    const set = new Set();
    for(let r=rowStart;r<rowStart+3;r++){
        for(let c=colStart;c<colStart+3;c++){
            if(board[r][c]==='.'){
                continue;
            }
            if(set.has(board[r][c])){
                return false;
            }
            set.add(board[r][c]);
        }
    }
    return true;
}

const board1 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const actual1 = isValidSudoku(board1);
console.log(actual1 === true);

const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const actual2 = isValidSudoku(board2);
console.log(actual2 === false);


/*
Runtime: 81 ms, faster than 95.26% of JavaScript online submissions for Valid Sudoku.
Memory Usage: 45.1 MB, less than 17.20% of JavaScript online submissions for Valid Sudoku.
*/