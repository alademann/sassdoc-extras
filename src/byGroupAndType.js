'use strict';

var eachItem = require('./eachItem');

module.exports = function (data){
  var byGroupAndType = {};

  eachItem(data, function (item, type){
    var niceType = type == 'variable' ? 'variable' : 'helper';

    var group = item.group[0][0];

    if (byGroupAndType[group] === undefined) {
      byGroupAndType[group] = {};
    }

    if (!Array.isArray(byGroupAndType[group][type])){
      byGroupAndType[group][type] = [];
    }

    byGroupAndType[group][type].push(item);

    //
    // Create a "supergroup" combining mixin and functions
    //
    if (niceType == 'helper') {

      if (!Array.isArray(byGroupAndType[group][niceType])){
        byGroupAndType[group][niceType] = [];
      }

      byGroupAndType[group][niceType].push(item);

    }

  });

  return byGroupAndType;
};
