/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
    const list = path.split('/');
    const newList = [];
    for (const part of list) {
        if(!part || part ==='.') {
            continue;
        }
        if (part === '..') {
            newList.pop();
        } else {
            newList.push(part);
        }
    }

    return newList.reduce((acc, part) => {
        acc += "/" + part;
        return acc;
    }, "") || "/";
}

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));