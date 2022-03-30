/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const mapS = new Map();
    for(let i=0;i<s.length;i++){
        const count = mapS.get(s[i]) || 0;
        mapS.set(s[i], count+1);
    }

    const mapT = new Map();
    for(let i=0;i<t.length;i++){
        const count = mapT.get(t[i]) || 0;
        mapT.set(t[i], count+1);
    }

    for(const [key, value] of mapS.entries()){
        if(value!==mapT.get(key)){
            return false;
        }
    }

    for(const [key, value] of mapT.entries()){
        if(value!==mapS.get(key)){
            return false;
        }
    }

    return true;
};