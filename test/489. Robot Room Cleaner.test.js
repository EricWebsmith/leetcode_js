function Robot() {
    // Returns true if the cell in front is open and robot moves into the cell.
    // Returns false if the cell in front is blocked and robot stays in the current cell.
    /**@return { boolean }*/
    this.move = function () {
        return true;
    };

    // Robot will stay in the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
    /**@return { void}*/
    this.turnLeft = function () {
    };

    // Robot will stay in the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
    /**@return { void}*/
    this.turnRight = function () {
    };

    // Clean the current cell.
    /**@return { void}*/
    this.clean = function () {
    };
};



/**
 * @param {Robot} robot
 * @return {void}
 */
function cleanRoom(robot) {

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const seen = {};
    seen[0] = {};
    seen[0][0] = 1;

    function goBack() {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }

    function backTrack(x, y, d) {
        robot.clean();

        for (let i = 0; i < 4; i++) {
            const newD = (d + i) % 4;
            const newX = x + directions[newD][0];
            const newY = y + directions[newD][1];

            if (seen[newX] === undefined) { seen[newX] = {}; }
            if (seen[newX][newY] !== 1 && robot.move()) {
                seen[newX][newY] = 1;
                backTrack(newX, newY, newD);
                goBack();
            }

            robot.turnRight();
        }
    }

    backTrack(0, 0, 0);
}

/*
Runtime: 85 ms, faster than 93.53% of JavaScript online submissions for Robot Room Cleaner.
Memory Usage: 46.1 MB, less than 96.27% of JavaScript online submissions for Robot Room Cleaner.
*/