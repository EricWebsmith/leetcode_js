/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let l = Math.ceil(Math.sqrt(area));
    for(let i=l;i<=area;i++){
        if(area % i !== 0){
            continue
        }

        return [i, area/i];
    }
};