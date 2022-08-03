
/**
 * @param {string[]} equations
 * @return {boolean}
 */
function aaaaaaaaa(equations) {
    const map = new Map();

    /**
     * 
     * @param {string} c
     */
    function find(c) {
        if (!map.has(c)) {
            map.set(c, c);
            return c;
        }

        const p = map.get(c);
        if (map.get(p) === p) {
            return p;
        }
        return find(p);
    }

    /**
     * 
     * @param {string} c 
     * @param {string} d
     */
    function union(c, d) {
        const pc = find(c);
        const pd = find(d);
        const p = pc < pd ? pc : pd;
        map.set(pc, p);
        map.set(pd, p);
    }

    for (const edge of edges) {
        union(equation[0], equation[1]);
    }

    // // flatten
    for (const [key, value] of map.entries()) {
        map.set(key, find(key));
    }

    // reserse map
    const reverseMap = new Map();
    for (const [key, value] of map.entries()) {
        if (!reverseMap.has(value)) {
            reverseMap.set(value, []);
        }

        reverseMap.get(value).push(key);
    }
}