/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    s = s.replace(/\-/g, '');
    s = s.toUpperCase();
    const n = s.length;
    let license = '';

    for (let i = n - 1; i >= 0; i--) {
        license = s[i] + license;
        if(i > 0 && k === 1){
            license = '-' + license;
        } else if (i > 0 && i<n-1 && (n - i) % k === 0) {
            license = '-' + license;
        }
    }
    return license;
};

function test(s, k, expected) {
    const actual = licenseKeyFormatting(s, k);
    const result = actual === expected;
    console.log(result, expected, actual);
}

test("5F3Z-2e-9-w", 4, "5F3Z-2E9W");
test("2-5g-3-J", 2, "2-5G-3J");

/*
Runtime: 82 ms, faster than 83.75% of JavaScript online submissions for License Key Formatting.
Memory Usage: 47 MB, less than 28.34% of JavaScript online submissions for License Key Formatting.
*/