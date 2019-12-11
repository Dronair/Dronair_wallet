/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Run from './src/Run';
import PinLock from './src/screens/PinCode/PinLock';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Run);
