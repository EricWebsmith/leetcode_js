/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
    var n = arr.length;
    if (n < 2) { return 0; }

    const map = {};
    arr.forEach((v, i) => { 
        if(map[v] === undefined){
            map[v] = [];
        }
        map[v].push(i);
    });

    //BFS
    const q = [0];
    let step = 0;
    const visited = {0: true};

    while(q.length>0){
        const qLength = q.length;
        for(let time=0;time<qLength;time++){
            const i = q.shift();
            const v = arr[i];
            if( i === n-1){
                return step;
            }

            const next = map[v]? new Set(map[v]): new Set();
            next.add(i-1);
            next.add(i+1);
            next.forEach(j => {
                if(j>=0 && j<n && !visited[j]){
                    q.push(j);
                    visited[j] = true;
                }
            });
            delete map[v];
        }

        step++;
    }

    return -1;
};