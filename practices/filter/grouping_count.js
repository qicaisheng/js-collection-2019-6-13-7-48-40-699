'use strict';

function grouping_count(collection) {
  let result = {}
  collection.forEach(item => {
    if (result.hasOwnProperty(item + '')) {
      result[item + '']++
    } else {
      result[item + ''] = 1
    }
  })
  return result
}

module.exports = grouping_count;
