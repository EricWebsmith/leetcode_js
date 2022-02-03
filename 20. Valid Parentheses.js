/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const dict = new Map();
    dict.set('[',']');
    dict.set('(',')');
    dict.set('{','}');
    const n = s.length;
    const stack = [];
    for (let i = 0; i < n; i++) {
        if('({['.includes(s[i]) ){
            stack.unshift(s[i]);
        }
        else{
            const open = stack.shift();
            const close = dict.get(open);
            
            if(close !== s[i]){
                return false;
            }
        }
    }

    return stack.length === 0;
};