'use strict';

var foreach = require('lodash.foreach');

module.exports = function (data, callback){
  foreach(data, function (typeObj, type){
    foreach(typeObj, function (item, name){
      callback(item, type, name);
    });
  });
};