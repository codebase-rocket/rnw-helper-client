// Info: Client info. Support ios, android and web
'use strict';

// React (Private Scope)
import React, {useEffect, useState} from 'react';


// React Native Base component (Private Scope)
import {useWindowDimensions} from 'react-native';


// Shared Dependencies (Managed by Loader)
var Lib = {};


// Exclusive Dependencies
var CONFIG ;


/////////////////////////// Module-Loader START ////////////////////////////////
/********************************************************************
Load dependencies and configurations

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
@param {Set} config - Custom configuration in key-value pairs

@return nothing
*********************************************************************/
const loader = function(shared_libs, config){

  // Shared Dependencies (Must be loaded in memory already)
  Lib.Utils = shared_libs.Utils;

  // Shared Dependencies (Must be loaded in memory already)
  CONFIG = config;

  // Load Client service on the basis of platform
  if(CONFIG['APP_PLATFORM'] == 'BROWSER'){ // Client Service Web
    Lib.ClientInfo = require('./web/clientInfo')(Lib, CONFIG);
  }
  else{ // Client Service Native
    Lib.ClientInfo = require('./native/clientInfo')(Lib, CONFIG);
  }


};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////// Module Exports START /////////////////////////////
// Export Public Funtions of this module
module.exports = function (shared_libs, config){

  // Run Loader
  loader(shared_libs, config);


  // Return Public Funtions of this module
  return Client;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START//////////////////////////////
const Client = { // Public functions accessible by other modules

  /********************************************************************
  Get info data

  @param {Function} cb - callback function to get client info

  @return info_data - through callback
    * @callback {String} screen_width - Width of screen app is running on
    * @callback {String} screen_height - Height of screen app is running on
    * @callback {String} client - Client name example -(Google Chrome(for web), IphoneX )
    * @callback {String} client_version - client version example -(118.023.1.0, 16.5(device os version))
    * @callback {Boolean} is_browser - true if app is running on browser
    * @callback {Boolean} is_mobile - true if app is running on mobile
    * @callback {String} os - Device OS example - (Mac os, android os, etc)
    * @callback {String} os_version - Device OS version example - (12.5, 11, etc)
  *********************************************************************/
  getClientInfo: function(cb){
    // Get Client info
    Lib.ClientInfo.getInfoData(cb);

  },


  /********************************************************************
  Determine if app is running inside a Browser (React JS)
  Automatically gets App-Platform from CONFIG

  No param

  @return {Boolean} - True if app is running inside a Browser (React JS)
  @return {Boolean} - False if app is running as Native App (React Native)
  *********************************************************************/
  isBrowser: function(){

    // Return true if Platform is browser
    return (
      CONFIG['APP_PLATFORM'] == 'BROWSER'
    );

  },


  /********************************************************************
  Determine if app is running as Native App (React Native)
  Automatically gets App-Platform from CONFIG

  No param

  @return {Boolean} - True if app is running as Native App (React Native)
  @return {Boolean} - False if app is running inside a Browser (React JS)
  *********************************************************************/
  isNative: function(){

    // Return true if Platform is IOS or Android
    return (
      CONFIG['APP_PLATFORM'] == 'IOS' ||
      CONFIG['APP_PLATFORM'] == 'ANDROID'
    );

  },


  /********************************************************************
  Determine if app is running as Native IOS App
  Automatically gets App-Platform from CONFIG

  No param

  @return {Boolean} - True if app is running as Native IOS App
  @return {Boolean} - False if app is running inside a Browser or Native Android
  *********************************************************************/
  isIos: function(){

    return (
      CONFIG['APP_PLATFORM'] == 'IOS'
    );

  },


  /********************************************************************
  Determine if app is running as Native Android App
  Automatically gets App-Platform from CONFIG

  No param

  @return {Boolean} - True if app is running as Android App
  @return {Boolean} - False if app is running inside a Browser or Native IOS
  *********************************************************************/
  isAndroid: function(){

    return (
      CONFIG['APP_PLATFORM'] == 'ANDROID'
    );

  },


  /********************************************************************
  Determine if platform is localhost 

  None
  
  @return {Boolean} - If localhost is available
  *********************************************************************/
  isLocalhost: function(){
    
    // Check if Platform is Browser
    if(Client.isBrowser()){
      return window.location.hostname == 'localhost' // Return True if app is running on localhost
    }
    else{
      return false;
    }
 
  },


  /********************************************************************
  Determine device orientation (portrait)

  Params - none

  @return {Boolean} -  Device orientation true if Portrait 
  *********************************************************************/
  isDeviceModePortrait: function(){

    // Get window dimensions using the useWindowDimensions hook
    const dimensions = useWindowDimensions();

    // Set the initial orientation state based on the dimensions of the screen.
    const [is_portrait, set_is_portrait] = useState(_Client.getOrientationState(dimensions));

    // useEffect React lifecycle hook, called only once
    useEffect(() => {

      // Check if the screen is in portrait mode
      if (_Client.getOrientationState(dimensions)){
        set_is_portrait(true);
      } 
      else { // In case of landscape mode
        set_is_portrait(false);
      }

    }, [dimensions.width, dimensions.height]);

    // Return the is_portrait value
    return is_portrait;
  }

 
};
////////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START//////////////////////////////
const _Client = { // Private functions accessible within this modules only

  /********************************************************************
  Get Orientation State

  @param {Set} dimensions - Get window Height and Width  

  @return - {Boolean} - 'true' In case of portrait mode, 'false' In case of landscape mode.
  *********************************************************************/
  getOrientationState: function(dimensions){
    
    // Check if screen is in portrait mode
    if(dimensions.width < dimensions.height){
      return true; 
    }
    else{ // In case of landscape mode
      return false;
    }

  },


};/////////////////////////Private Functions END///////////////////////////////
