import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './screens/Main';
import Splash from './screens/Splash';
import PinLock from './screens/PinCode/PinLock';
import HomeWeb from './screens/webs/HomeWeb';
import LostPasswordWeb from './screens/webs/LostPasswordWeb';
import Login from './screens/Login';
import CreateWallet from './screens/CreateWallet';
import './Global';

const Navigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
        header: null
        }
    },
    PinLock: {
        screen: PinLock,
        navigationOptions: {
        header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
        header: null
        }
    },
    LostPasswordWeb: {
        screen: LostPasswordWeb,
    },
    HomeWeb: {
        screen: HomeWeb,
    },
    CreateWallet: {
        screen: CreateWallet,
        navigationOptions: {
        header: null
        }
    },
    Main: {
        screen: Main,
        navigationOptions: {
            gesturesEnabled: false
        }
    },
    animationType: 'none'
});
const AppContainer = createAppContainer(Navigator);
//export default createAppContainer(Navigator);
export default class Run extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <AppContainer />
        )
    }
}
