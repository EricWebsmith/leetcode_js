const {expect} = require('chai');
const math = require('../templates/math');

describe('Math Greatest Common Divisor', ()=> {
    it('gcd 12 33', () => {
        const ans = math.gcd(12, 33);
        expect(ans).to.be.eql(3);
    });

    it('gcd 25 100', () => {
        const ans = math.gcd(25, 100);
        expect(ans).to.be.eql(25);
    });

    it('gcd 41 13', () => {
        const ans = math.gcd(41, 13);
        expect(ans).to.be.eql(1);
    });

    it('gcd 252 105', () => {
        const ans = math.gcd(252, 105);
        expect(ans).to.be.eql(21);
    });
});