'use strict';

module.exports = function() {

  var fs = require('fs');
  var os = require('os');

  var profileFileName = 'profile';

  function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }

  if (endsWith(process.env.SHELL, 'zsh')) {
    profileFileName = 'zprofile';
  }

  var profilePath = os.homedir() + '/.' + profileFileName;
  var profile = '';

  try {
    if (fs.statSync(profilePath).isFile()) {
      profile = fs.readFileSync(profilePath).toString();
    }
  } catch (_) {}

  var sourceCommand = 'source ' + profilePath;

  var config = '\n' +
    '# Begin To Configuration\n' +
    'export TO_SETUP=1\n' +
    'alias to=". to"\n' +
    '# End To Configuration';


  if (profile.indexOf(config) === -1) {

    console.log('The following will be appended to ' + profilePath);

    console.log(config.split('\n').join('\n  ') + '\n');

    var readline = require('readline');

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });


    rl.question('Continue? (y/n) ', function(answer) {
      if (answer.toLowerCase()[0] === 'y') {

        profile += config;

        fs.writeFileSync(profilePath, profile);
        console.log('\nSuccess: .' + profileFileName + ' updated! Restart each ' +
          ' terminal session or run the following command in each one to complete setup.');

        console.log('\n  ' + sourceCommand + '\n');

      } else {
        console.log('Cancelled');
      }

      rl.close();
    });

  } else if (process.env.TO_SETUP === '1') {

    console.log('To already appears to be configured. No further setup should be needed.');

  } else {

    console.log('To configuration already in .' + profileFileName + '. Try running the' +
      ' following command to complete setup.');

    console.log('\n  ' + sourceCommand + '\n');

  }

};
