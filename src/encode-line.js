const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let r = '';
  let c = 0;
  for (let i = 0; i < str.length; i += 1) {
    c += 1;
    if (str[i] !== str[i + 1]) {
      c === 1 && (c = '');
      r += c + str[i];
      c = 0;
    }
  }
  return r;
}

module.exports = {
  encodeLine
};
