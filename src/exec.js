'use strict';

module.exports = {
  echo: function(string) {
    console.log('echo', string.split('"').join('\\"'));
  },

  cd: function(path) {
    console.log('cd', path.split(' ').join('\\ '));
  },

  edit: function(path) {
    var editor = process.env.EDITOR;

    if (typeof editor === 'undefined') {
      editor = 'nano';
    }

    console.log(editor, path);
  }
};
