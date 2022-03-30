/**
 * @param {number[]} nums
 * @return {number}
 */
function halveArray (nums) {
    const n = nums.length;
    nums.sort((a,b)=>a-b);
    const sum = nums.reduce((acc, num)=>{
        acc += num;
        return acc;
    }, 0);
    const half = sum/ 2;
    let reduce  = 0;
    let times = 0;
    while(reduce < half){
        const max = nums.pop();
        console.log(max);
        const t = max/ 2;
        reduce += t;
        nums.push(t);
        nums.sort((a,b)=>a-b);
        times++;
    }

    return times;
};

const list = [92,91,55,74,98,45,94,99,35,28,78,10,27,55,93,93,33,76,14,27,82,11,5,58,96,70,31,6];
console.log(halveArray(list));