import React, { Component } from 'react';
import { Platform, Image, View, TouchableOpacity, BackHandler, ToastAndroid } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Dashboard from './tabs/Dashboard';
import Withdrawal from './tabs/Withdrawal';
import Deposit from './tabs/Deposit';
import Transaction from './tabs/Transaction';
import Swap from './tabs/Swap';

const MainNavigator = createBottomTabNavigator({
    Withdrawal: {
        screen: Withdrawal
    },
    Dashboard: {
        screen: Dashboard
    },
    Transaction: {
        screen: Transaction
    },
    Deposit: {
        screen: Deposit
    },
    Swap: {
        screen: Swap
    },
},{
    tabBarOptions: {
        style: {
            backgroundColor: 'white'
        },
        activeTintColor: '#069ff8',
        inactiveTintColor: 'gray'
    },
    initialRouteName: 'Dashboard'
});

const MainApp = createAppContainer(MainNavigator);

export default class Main extends Component {
    state = {
        backClickCount: 0
    };
    toastExit = () => {
        ToastAndroid.showWithGravityAndOffset(
        'Press back again to exit',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
        );
        return null;
    };
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton = () => {
        if(this.state.backClickCount === 1){
            BackHandler.exitApp();
        }
        ToastAndroid.show('Press back again to exit!', ToastAndroid.SHORT);
        this.setState({backClickCount: 1});
        setTimeout(() => {
            this.setState({backClickCount: 0});
        }, 200);
        return true;
    };
    static navigationOptions = {
        headerTitle: <Image
                    style={{
                        witdth: 168,
                        height: 24,
                        resizeMode: 'contain',
                        flex: 1
                    }}
                    source={require('../images/web_name.png')}/>,
        headerLeft: <TouchableOpacity>
                        <Icon
                            ios = 'ios-menu'
                            android = 'md-menu'
                            style = {{paddingLeft: 10, color: 'white' }} />
                    </TouchableOpacity>,
        headerRight: <TouchableOpacity>
                        <Icon
                            type = 'MaterialCommunityIcons'
                            name = 'qrcode-scan'
                            style = {{paddingRight: 10, color: 'white' }} />
                    </TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#069ff8'
        }
    }

    render() {
        return (
            <MainApp />
        )
    }
}
