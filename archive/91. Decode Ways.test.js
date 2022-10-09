const {expect} = require('chai');

function oneStep(s, i) {
    return s[i] == '0' ? 0 : 1;
}


/**
 * Two steps
 * @param {string} s The string.
 * @param {number} i the int.
 * @returns
 */
function twoSteps(s, i) {
  if (s[i + 0] == '0') {
    return 0;
  }

  if (s[i + 0] == '1') {
    return 1;
  }

  if (s[i + 0] == '2' && s[i + 1] >= '0' && s[i + 1] <= '6') {
    return 1;
  }

  return 0;
}

/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  let c = oneStep(s, 0);
  let b = c;
  let a = 1;

  for (let i = 1; i < s.length; i++) {
    c = a * twoSteps(s, i - 1) + b * oneStep(s, i);
    a = b;
    b = c;
  }

  return c;
}


function test(s, expected) {
  const actual = numDecodings(s);
  expect(actual).to.be.eql(expected);
}

describe('91. Decode Ways', () => {
  it('91. 1', () => {
    test('12', 2);
  });
  it('91. 2', () => {
    test('226', 3);
  });
  it('91. 3', () => {
    test('06', 0);
  });
});

/*
69ms, 93%
*/
