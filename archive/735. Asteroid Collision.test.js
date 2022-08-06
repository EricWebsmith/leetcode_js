const { expect } = require("chai");

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
    const aliveAsteroids = [];
    for (const asteroid of asteroids) {
        let currentAlive = true;
        while(currentAlive && aliveAsteroids.length>0 && aliveAsteroids[aliveAsteroids.length-1]>0 && asteroid<0) {
            if(aliveAsteroids[aliveAsteroids.length-1] === -asteroid) {
                aliveAsteroids.pop();
                currentAlive = false;
            } else if(aliveAsteroids[aliveAsteroids.length-1] > -asteroid){
                currentAlive = false;
            } else {
                aliveAsteroids.pop();
            }
            
        }
        if (currentAlive) {
            aliveAsteroids.push(asteroid);
        }
    }

    return aliveAsteroids;
}


function test(asteroids, expected) {

    const actual = asteroidCollision(asteroids);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('735. Asteroid Collision', () => {
    it('735. 1', () => { test([5, 10, -5], [5, 10]) });
    it('735. 2', () => { test([8, -8], []) });
    it('735. 3', () => { test([10, 2, -5], [10]) });

});


/*
Runtime: 73 ms, faster than 95.80% of JavaScript online submissions for Asteroid Collision.
Memory Usage: 44.1 MB, less than 68.20% of JavaScript online submissions for Asteroid Collision.
*/