const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) {
    return false;
  }
  if (!members[0]) {
    return false;
  }
  let r = [];
  members.map(elem => {
    if (typeof elem === 'string' && elem.length !== 0) {
      r.push(elem.trim()[0].toUpperCase());
    }
  });
  return r.sort().join('');
}

module.exports = {
  createDreamTeam
};
