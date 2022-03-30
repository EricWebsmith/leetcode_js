class SubrectangleQueries{
    /**
     * @param {number[][]} rectangle
     */
    constructor(rectangle){
        this.rectangle = rectangle;
        /**
         * @type {number[][]}
         */
        this.patches = [];
    }

    /** 
     * @param {number} row1 
     * @param {number} col1 
     * @param {number} row2 
     * @param {number} col2 
     * @param {number} newValue
     * @return {void}
     */
    updateSubrectangle(row1, col1, row2, col2, newValue){
        this.patches.unshift([row1, col1, row2, col2, newValue]);
    }

    /** 
     * @param {number} row 
     * @param {number} col
     * @return {number}
     */
    getValue(row, col){
        for(const [row1, col1, row2, col2, value] of this.patches){
            if(row1 <= row && row <= row2 && col1 <= col && col <= col2){
                return value
            }
        }

        return this.rectangle[row][col];
    }
}

const rectangle = [[1,2,1],[4,3,4],[3,2,1],[1,1,1]];
const subrectangleQueries = new SubrectangleQueries(rectangle)
subrectangleQueries.getValue(0, 2); // return 1
subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5);
subrectangleQueries.getValue(0, 2); // return 5
subrectangleQueries.getValue(3, 1); // return 5
subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10);
subrectangleQueries.getValue(3, 1); // return 10
subrectangleQueries.getValue(0, 2); // return 5
console.log(subrectangleQueries.getValue(0, 2));