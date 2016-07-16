#!/usr/bin/env node

'use strict';

var command = process.argv[2];
var options = process.argv[3];

if (command === 'setup') {

  require('../src/setup')();

} else if (!process.env.TO_SETUP) {

  var Error = require('../src/error');
  var directPrint = typeof command === 'undefined' || command === 'setup';
  Error.handle(Error.errors.NotSetup, directPrint);

} else if (options) {

  require('../src/set')(command, options);

} else if (command === '--list') {

  console.log('To Aliases: \n');

  var Config = require('../src/config');
  var paths = Config.config.paths;

  var pad = function(string, length) {
    var padding = '';

    var padLength = length - string.length;

    while (padLength > 0) {
      padding += ' ';
      padLength--;
    }

    return padding + string;
  };

  var longest = 0;
  var aliases = Object.keys(paths).sort();

  for (var i in aliases) {
    var alias = aliases[i];

    if (alias.length > longest) {
      longest = alias.length;
    }
  }

  for (var i in aliases) {
    var alias = aliases[i];
    var path = paths[alias];
    console.log(pad(alias, longest + 2), '->', path);
  }

  console.log('');

} else if (command) {

  require('../src/go')(command);

} else {

  var message = 'Usage: \n\n' +
    'Set a alias:\n\n' +
    '   to [ALIAS NAME] [PATH]\n\n' +
    'Go to an alias:\n\n' +
    '   to [ALIAS NAME]\n\n' +
    'Remove an alias:\n\n' +
    '   to [ALIAS NAME] --remove\n\n' +
    'List all aliases:\n\n' +
    '   to --list\n';

  console.log(message);

}
