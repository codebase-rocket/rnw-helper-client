# rnw-helper-client

## Overview

This project provides utility functions related to client information for both web and React Native platforms. It includes functionality to retrieve information such as screen dimensions, client details, device orientation, and more.

## Table of Contents

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)
- [Note](#license)

## Dependencies

This project relies on the following dependencies:

- **React**: Used for handling component-based UI in the React Native module.
- **React Native**: Required for native functionalities and mobile-specific features.
- **React Native DeviceInfo**: Provides device information for React Native applications.
- **React Native Base**: Essential React Native components for building the user interface.
- **Loader**: Custom module loader for managing shared libraries and configurations.

## Installation

To install the project dependencies, follow these steps:

1. Put 
  "rnw-helper-cache": "npm:@codebase-rocket/rnw-helper-cache@^1.0.0",
  in dependecy in you 'package.json'
2. Do npm install

## Usage

  # GetClientInfo
  # isBrowser
  # isNative
  # isAndroid
  # isIos
  # isLocalHost
  # isDeviceModePortrait


    ```javascript
      Client.getClientInfo(callback)
      Client.isNative()
      Client.isAndroid()
      Client.isIos()
      Client.isLocalhost()
      Client.isDeviceModePortrait();
    ```

## Loading

Before using the utility functions, make sure to load the module based on the platform:

```javascript
// For React Native
const Client = require('./path/to/module')(shared_libs, config);

// For Web
const Client = require('./path/to/module')(shared_libs, config);


## Note

If you are using `react-native-web`, please ensure to exclude the React Native library from webpack (through alias). This library is intended only for the React Native platform.

### Webpack Configuration for `react-native-web`

When configuring your webpack, you can add an alias to exclude the React Native library. For example:

```javascript
// webpack.config.js

module.exports = {
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-device-info': 'react-native-web',
    },
  },
  // other webpack configurations...
};
