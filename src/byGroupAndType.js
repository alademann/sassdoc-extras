'use strict';

var eachItem = require('./eachItem');

module.exports = function (data){
  var byGroupAndType = {};

  eachItem(data, function (item, type){
    var group = item.group[0][0];

    if (byGroupAndType[group] === undefined) {
      byGroupAndType[group] = {};
    }

    if (!Array.isArray(byGroupAndType[group][type])){
      byGroupAndType[group][type] = [];
    }

    byGroupAndType[group][type].push(item);
  });

  return byGroupAndType;
};
