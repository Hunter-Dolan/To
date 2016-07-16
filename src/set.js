'use strict';

var set = function(key, path) {
  var Config = require('./config');

  if (path === '--remove') {
    Config.removePathKey(key);
  } else {
    Config.setPathKey(key, require('path').resolve(path));
  }
};

module.exports = set;
