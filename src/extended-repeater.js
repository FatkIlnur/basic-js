const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;
  let r = '';
  for (let i = 0; i < repeatTimes; i += 1) {
    let repeatS = String(str);
    for (let j = 0; j < additionRepeatTimes; j += 1) {
      repeatS += j === additionRepeatTimes - 1 ? addition : addition + additionSeparator;
    }
    r += i === repeatTimes - 1 ? repeatS : repeatS + separator;
  }
  return r
}

module.exports = {
  repeater
};
