const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = n.toString();
  let a = [];
  for (let i = 0; i < s.length; i += 1) {
    a.push(Number(s.slice(0, i) + s.slice(i + 1)));
  }
  return Math.max(...a);
}

module.exports = {
  deleteDigit
};
