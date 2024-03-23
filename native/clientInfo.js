// Info: Client info Web - Utility functions related to client info
'use strict';


// React Native DeviceInfo (Private Scope)
import DeviceInfo from 'react-native-device-info';

// React Native Base component (Private Scope)
import { Dimensions } from 'react-native';

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


    // Initialize info data
    var info_data = {};

    info_data['screen_width'] = Dimensions.get('window').width; 
    info_data['screen_height'] = Dimensions.get('window').height;
    info_data['client'] = _ClientInfo.getDeviceModel();
    info_data['client_version'] =  _ClientInfo.getDeviceSystemVersion();
    info_data['is_browser'] = false
    info_data['is_mobile'] = _ClientInfo.isDeviceMobile();
    info_data['os'] = _ClientInfo.getSystemName();
    info_data['os_version'] = _ClientInfo.getDeviceSystemVersion();

    // return through callback
    cb(info_data);

  },

  
};
////////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START//////////////////////////////
const _ClientInfo = { // Private functions accessible within this modules only

  /********************************************************************
  Get the system name of the device.
 
  Param - None
 
  @return {String} The system name of the device.
  *********************************************************************/
  getSystemName: function() {
    // Return the system name of the device
    return DeviceInfo.getSystemName();
  },


  /********************************************************************
  Check if the device is a mobile device.

  Param - None
  
  @return {Boolean} True if the device type is 'Handset' (mobile), otherwise false.
  *********************************************************************/
  isDeviceMobile: function() {

    // Get the device type
    const device_type = DeviceInfo.getDeviceType();

    // Return true if the device type is 'Handset' (mobile)
    return (device_type === 'Handset');

  },


  /********************************************************************
  Get the brand of the device (e.g., Apple).

  Param - None
  
  @return {String} The brand of the device.
  *********************************************************************/
  getDeviceBrand: function() {
    // Get the device brand
    return DeviceInfo.getBrand();
  },


  /********************************************************************
  Get the model of the device (e.g., iPhone X).

  Param - None
  
  @return {String} The model of the device.
  *********************************************************************/
  getDeviceModel: function() {
    // Get the device model
    return DeviceInfo.getModel();
  },


  /********************************************************************
  Get the system version of the device (e.g., 14.5).

  Param - None
  
  @return {String} The system version of the device.
  *********************************************************************/
  getDeviceSystemVersion: function() {
    // Get the system version of the device
    return DeviceInfo.getSystemVersion();
  },


};/////////////////////////Private Functions END///////////////////////////////
