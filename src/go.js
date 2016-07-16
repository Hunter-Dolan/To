'use strict';

var go = function(path) {

  var pathComponents = path.split('/');
  var key = pathComponents[0];

  var location = require('./config').getPathKey(key);
  var Error = require('./error');

  // Determine if a path exists
  if (typeof location === 'undefined') {
    // Print an error to let the user know
    Error.handle(Error.errors.NotFound);
  } else {
    // Determine if additional path was given
    if (pathComponents.length > 1) {
      // Append the additional path
      var additionalPath = pathComponents.slice(1, pathComponents.length).join('/');
      location = location + '/' + additionalPath;
    }

    var fs = require('fs');
    try {
      if (fs.statSync(location).isFile()) {
        require('./exec').edit(location);
      } else {
        require('./exec').cd(location);
      }
    } catch (_) {
      Error.handle(Error.errors.NotFoundAlisedFile);
    }

  }

};

module.exports = go;
