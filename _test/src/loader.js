// Info: Dependency Manager. Configuration Loader
'use strict';

// Initialize Lib and Config
var Lib = {};
var Config = {};


//////////////////////////// Module Exports START //////////////////////////////
module.exports = function(platform){

  // Helper Library of basic utility functions
  Lib.Utils = require('js-helper-utils');

  // App Platform
  Config['APP_PLATFORM'] = platform


  Lib.Client = require('rnw-helper-client')(Lib, Config);

   
  // Set App platform for this project (IOS, ANDROID, BROWSER)
  Config['APP_PLATFORM'] = platform;
  
  /* Return */
  return [Lib, Config];

};//////////////////////////// Module Exports END //////////////////////////////
