'use strict';

var Error = {
  errors: {
    NotFound: 'The specified alias could not be found',
    NotFoundAlisedFile: 'The specified location that this alias points to does not exist',
    NotSetup: 'The "to" alias is not configured to run in this session. ' +
      'Please run "to setup" to the complete installation.',
  },

  handle: function(error, directPrint) {
    if (directPrint) {
      console.log(error);
    } else {
      require('./exec').echo(error);
    }
  }

};

module.exports = Error;
