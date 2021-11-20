/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree0 = function(nums1, nums2, nums3) {
    d = {}
    for(let i=0;i<nums1.length;i++){
        d[nums1[i]] = 1;
    }

    for(let i=0;i<nums2.length;i++){
        if(d[nums2[i]]==undefined){
            d[nums2[i]] = 2;
        }
        else{
            d[nums2[i]] = d[nums2[i]] | 2;
        }
    }

    for(let i=0;i<nums3.length;i++){
        if(d[nums3[i]]==undefined){
            d[nums3[i]] = 4;
        }
        else{
            d[nums3[i]] = d[nums3[i]] | 4;
        }
    }

    res = [];
    for (let key in d) {
        if(d[key]==3 || d[key]==5 || d[key]==6 || d[key]==7){
            res.push(parseInt(key));
        }

        //console.log(key, d[key]);
    }
    return res;
};

var twoOutOfThree = function(nums1, nums2, nums3) {
    let set = new Set();
    nums1.forEach(num => {
        if(nums2.includes(num) || nums3.includes(num)){
            set.add(num);
        }
    });

    nums2.forEach(num => {
        if(nums1.includes(num) || nums3.includes(num)){
            set.add(num);
        }
    });

    return Array.from(set);
};

console.log(twoOutOfThree([1,1,3,2], [2,3], [3]), [2, 3]);
console.log(twoOutOfThree([3,1], [2,3], [1,2]), [2, 3, 1]);
console.log(twoOutOfThree([1,2,2], [4,3,3], [5]), []);