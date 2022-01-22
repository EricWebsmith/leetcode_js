/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let x = 0;
    operations.forEach(element => {
        switch (element) {
            case '--X':
            case 'X--':
                x--;
                break;
            default:
                x++;
                break;
        }
    });

    // for(const operation of operations){
    //     switch(operation){
    //         case '--X':
    //         case 'X--':
    //             x--;
    //             break;
    //         default:
    //             x++;
    //     }
    // }

    return x;
};

function test(operations, expected){
    let x = finalValueAfterOperations(operations);
    const result = x === expected
    console.log(result, x);
}

test(["--X","X++","X++"], 1);
test(["++X","++X","X++"], 3);
test(["X++","++X","--X","X--"], 0);