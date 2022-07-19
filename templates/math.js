/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function gcd(a, b) {
    if (a < b) {
        const temp = a;
        a = b;
        b = temp;
    }

    if (b === 0) { return a; }

    const r = a % b;
    return gcd(b, r);
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function lcm(a, b) {
    const c = gcd(a, b);
    return a / c * b;
}

module.exports = {
    gcd, 
    lcm
}
