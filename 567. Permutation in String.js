/**
 *              
 * @param {Map} m1 
 * @param {Map} m2 
 * @returns {boolean}
 */
function areAnagrams(m1, m2){
    for(const [k, v] of m1.entries()){
        if(m2.get(k)!==v){
            return false;
        }
    }

    return true;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    const n1 = s1.length;
    const n2 = s2.length;
    const map1 = new Map();
    const map2 = new Map();
    for (const c of 'abcdefghijklmnopqrstuvwxyz') {
        map1.set(c, 0);
        map2.set(c, 0);
    }

    for(let i=0;i<s1.length;i++){
        map1.set(s1[i], map1.get(s1[i])+1);
        map2.set(s2[i], map2.get(s2[i])+1);
    }
    if(areAnagrams(map1,map2)){return true;}

    for(let i=n1;i<n2;i++){
        map2.set(s2[i-n1], map2.get(s2[i-n1])-1);
        map2.set(s2[i], map2.get(s2[i])+1);
        if(areAnagrams(map1,map2)){return true;}
    }

    return false;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @param {boolean} expected
 * @return {void}
 */
function test(s1, s2, expected){
    const actual = checkInclusion(s1, s2);
    console.log(expected===actual, expected, actual);
}

test("ab", "eidbaooo", true)

test("ab", "eidboaoo", false)