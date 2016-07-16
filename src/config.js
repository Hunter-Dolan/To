'use strict';

//
// Class Definition
//

var Config = function() {
  var os = require('os');
  var configPath = os.homedir() + '/.to_config';

  //
  // Definitions
  //

  // Base Configuration
  this.config = {
    'paths': {}
  };

  // Sets a configuration path value
  this.setPathKey = function(key, value) {
    this.config.paths[key] = value;
    this.save();
  };

  // Removes a path value
  this.removePathKey = function(key) {
    delete this.config.paths[key];
    this.save();
  };

  // Gets a path value from the configuration
  this.getPathKey = function(key) {
    return this.config.paths[key];
  };

  // Saves the configuration file
  this.save = function() {
    var fs = require('fs');
    fs.writeFileSync(configPath, JSON.stringify(this.config));
  };

  // Loads the configuration file
  this.load = function() {
    var fs = require('fs');
    try {
      if (fs.statSync(configPath).isFile()) {
        var file = fs.readFileSync(configPath);
        this.config = JSON.parse(file.toString());
      }
    } catch (_) {}
  };

  //
  // Init
  //

  // Upon startup, load the configuration
  this.load();
};

// Create an instance of config
var config = new Config();

// Export that instance
module.exports = config;
