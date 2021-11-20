/**
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
    let words = s.split(" ");

    let previous = -1;
    for(let i = 0; i < words.length; i++){
        let current = parseInt(words[i]);
        if(isNaN(current)){
            continue;
        }
        if(current <= previous){
            return false;
        }
        previous = current;
    }

    return true;
};

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"), true);
console.log(areNumbersAscending("hello world 5 x 5"), false);
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"), false);
console.log(areNumbersAscending("4 5 11 26"), true);