'use strict';

module.exports = function byGroupAndType(data) {
  var sorted = {};

  data.forEach(function (item) {
    var group = item.group[0];
    var type = item.context.type;
    var niceType = type == 'variable' ? 'variable' : 'helper';

    if (!(group in sorted)) {
      sorted[group] = {};
    }

    if (!(type in sorted[group])) {
      sorted[group][type] = [];
    }

    sorted[group][type].push(item);

    //
    // Create a "supergroup" combining mixin and functions
    //
    if (niceType == 'helper') {

      if (!Array.isArray(sorted[group][niceType])){
        sorted[group][niceType] = [];
      }

      sorted[group][niceType].push(item);

    }
  });

  return sorted;
};
