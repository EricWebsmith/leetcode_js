/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    let d = {};
    let allStrings = [];
    
    for (let i = 0; i < arr.length; i++) {   
        if(d[arr[i]]===undefined) {
            d[arr[i]] = 1;
            allStrings.push(arr[i]);
        }
        else{
            d[arr[i]] = 2;
        }
    }

    let uniqueStrings = [];
    let count = 0;
    for(let i=0;i<allStrings.length;i++){
        if(d[allStrings[i]]==1){
            count++;
            if(count == k){
                return allStrings[i];
            }
            uniqueStrings.push(allStrings[i]);
        }
    }

    return "";
};

console.log(kthDistinct(["d","b","c","b","c","a"], 2));
console.log(kthDistinct(["aaa","aa","a"], 1));
console.log(kthDistinct(["a","b","a"], 3));