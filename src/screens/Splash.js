import React, { Component } from 'react';
import { StyleSheet, Text, View,
        SafeAreaView, StatusBar, Image,
        TextInput, TouchableOpacity,
        Animated, ActivityIndicator } from 'react-native';

export default class Splash extends Component {
    constructor(props) {
        super(props);
        setLocalData( 'login_status', 'false');
        //setLocalData( 'pin_code', '123456');
        //removeLocalData('login_status');
        setTimeout(() => {
            getLocalData( 'login_status' ).then((data) => {
                if(data === null || data === undefined || data === 'false' ) {
                    this.setState({waitStatus: false});
                    this.buttonAnimation();
                } else {
                    this.props.navigation.navigate('PinLock');
                }
                });
        }, 1200);
        this.state = {
            waitStatus: true,
            fadeValue: new Animated.Value(0),
            springValue: new Animated.Value(5)
        };

    }
    preLoad = () => {

    }
    buttonAnimation(){
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 3000
        }).start();
    }
    logoAnimation(){
        Animated.spring(this.state.springValue, {
            toValue: 1,
            frinction: 1
        }).start();
    }
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='dark-content'/>
                <View style={styles.container}>
                    <Animated.View style={[styles.logoContainer, {flex: 2},
                                        {transform: [{scale: this.state.springValue}], alignSelf: 'center'}]}>
                        <Image style={styles.logo}
                            source={require('../images/favicon.png')} >
                        </Image>
                        <Image style={styles.appName}
                            source={require('../images/web_name.png')}>
                        </Image>
                    </Animated.View>
                    {this.logoAnimation()}
                    {
                        this.state.waitStatus ?
                        <View style={[styles.buttonContainer,{flex: 3}]}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                        :
                        <Animated.View style={[styles.buttonContainer, {flex: 3, opacity: this.state.fadeValue}]}>
                            <TouchableOpacity style={[styles.button, {backgroundColor: '#41b9ff'}]}
                            onPress = {()=>this.props.navigation.navigate('CreateWallet')}>
                                <Text style={styles.buttonText}>Create Wallet</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress = {()=>this.props.navigation.navigate('Login')}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=>this.props.navigation.navigate('HomeWeb')}>
                                <Text style={styles.linkText}>Home page</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    }
                </View>
            </SafeAreaView>
           
        
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#069ff8',
        flex: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    logo: {
        width: 96,
        height: 96
    },
    appName: {
        width: 224,
        height: 32,
        marginVertical: 20
    },
    buttonContainer: {
        paddingVertical: 20,
        marginTop: 0,
        justifyContent: 'flex-start'
    },
    button: {
        backgroundColor: '#68b5df',
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    linkText: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        padding: 15,
    }
})