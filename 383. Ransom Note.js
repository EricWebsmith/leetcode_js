/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const mapRansom = new Map();
    const mapMagazine = new Map();
    for (let i = 0; i < ransomNote.length; i++) {
        let count = mapRansom.get(ransomNote[i]);
        if (!count) { count = 0; }
        mapRansom.set(ransomNote[i], count + 1);
    }

    for (let i = 0; i < magazine.length; i++) {
        let count = mapMagazine.get(magazine[i]);
        if (!count) { count = 0; }
        mapMagazine.set(magazine[i], count + 1);
    }

    for (const [key, count] of mapRansom.entries()) {
        let countMagazine = mapMagazine.get(key);
        if (!countMagazine) { countMagazine = 0; }
        if (count > countMagazine) {
            return false;
        }
    }

    return true;
};


/**
 * 
 * @param {string} ransomNote 
 * @param {string} magazine 
 * @param {boolean} expected 
 */
function test(ransomNote, magazine, expected) {
    const actual = canConstruct(ransomNote, magazine);
    console.log(expected === actual, actual);
}

test('a', 'b', false);
test('aa', 'ab', false);
test('aa', 'aab', true);