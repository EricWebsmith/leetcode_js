/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const map = new Map();
    for(const [from, to] of paths){
        map.set(from, to);
    }

    for(const [from, to] of paths){
        if(!map.has(to)){
            return to;
        }
    }

    return '';
};