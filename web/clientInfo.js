// Info: Client info Web - Utility functions related to client info
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib

// Exclusive Dependencies
var CONFIG;

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
Load dependencies and configurations

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
@param {Set} config - Custom configuration in key-value pairs

@return nothing
*********************************************************************/
const loader = function(shared_libs, config){

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

};

//////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////// Module Exports START /////////////////////////////
// Export Public Funtions of this module
module.exports = function (shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return ClientInfo

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START//////////////////////////////
const ClientInfo = { // Public functions accessible by other modules

  /********************************************************************
  Get info data 

  @param {Function} cb - callback function to get device info

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
  getInfoData: function(cb){ // get client info
    
    // Get user agent data
    _ClientInfo.getUserAgentData(function(user_agent_data, use_agent_string){

        // Initialize info data
      var info_data = {};

      info_data['screen_width'] = window['screen']['width']
      info_data['screen_height'] =  window['screen']['height']
      info_data['client'] = _ClientInfo.getUserAgentClientAndVersion(user_agent_data)?.['brand']
      info_data['client_version'] = _ClientInfo.getUserAgentClientAndVersion(user_agent_data)?.['version']
      info_data['is_browser'] = true
      info_data['is_mobile'] = user_agent_data?.['mobile']
      info_data['os'] = user_agent_data?.['platform']
      info_data['os_version'] = user_agent_data?.['platformVersion']

      // pass info dat to callback function
      cb(info_data);

    })

  },

};
////////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START//////////////////////////////
const _ClientInfo = { // Private functions accessible within this modules only


  /********************************************************************
  Retrieve user agent data

  @param {Function} cb - Callback function to get user agent data

  @return {Set} - User agent data 
    * @callback {Set} userAgentData - User agent data (Brand name(Google Chrome), Brand version, Platform(MacOS), Platform version)
  *********************************************************************/
  getUserAgentData: function(cb){

    // Check if userAgentData is available in navigator
    if ('userAgentData' in navigator){

      // Check if getHighEntropyValues is available 
      if ('getHighEntropyValues' in navigator['userAgentData']){

        // Initialize high entropy value configuration
        let high_entropy_value_config = ["platformVersion", "fullVersionList"];

        // Get high entropy values of the client
        navigator.userAgentData
          .getHighEntropyValues(high_entropy_value_config)
          .then(function(user_agent_data){
            // Pass user_agent_data to the callback function
            cb(user_agent_data);
          });

      } else {
        // If getHighEntropyValues is not available, use the existing navigator.userAgentData
        cb(window.navigator.userAgentData);
      }

    } else {
      // If userAgentData is not available, use the existing userAgent of navigator
      cb(null, window.navigator.userAgent);
    }

  },



  /********************************************************************
  Extract client name and version from user agent data

  @param {Set} user_agent_data - User agent data containing information about the client

  @return {Set} - Client information including name and version
  *********************************************************************/
  getUserAgentClientAndVersion: function(user_agent_data){

    // Check if user_agent_data is not empty and 'fullVersionList' is available
    if (
      !Lib.Utils.isEmpty(user_agent_data) &&
      'fullVersionList' in user_agent_data
    ){
      // Return the full version list if available
      return user_agent_data['fullVersionList']?.[0];
    } 
    else {
      // If 'fullVersionList' is not available, return the first brand in the 'brands' list
      return user_agent_data?.['brands']?.[0];
    }

  }


};/////////////////////////Private Functions END///////////////////////////////
