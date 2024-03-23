// Info: Project Root
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// React (Private Scope)
import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';


/////////////////////////// Module-Loader START ////////////////////////////////
/********************************************************************
Load dependencies and Configurations

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules

Return - None
*********************************************************************/
const loader = function(shared_libs){

  // Shared Dependencies (Managed by Main Entry Module)
  Lib = shared_libs;


};/////////////////////////// Module-Loader END ////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs){

  // Load loader
  loader(shared_libs);

  // Export Public Interfaces of this module
  return Root;

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////////// Component START ///////////////////////////////
const Root = function(){


Lib.Client.getClientInfo(function(client_info){
  console.log('Lib.Client', client_info);

})

const adadad = Lib.Client.isDeviceModePortrait()

console.log('adadad', adadad);

  return (
    <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <Text style = {{fontSize: 50}}> Client Info</Text>
      </View>
  );

};/////////////////////////////// Component END ////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Root = { // Private functions accessible within this modules only


};//////////////////////////Private Functions END///////////////////////////////
