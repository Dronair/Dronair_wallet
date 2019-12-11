import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform,
        SafeAreaView, StatusBar, Image, BackHandler, ToastAndroid,
        TextInput, TouchableOpacity, Keyboard,
        TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

export default class PinLock extends Component {

    constructor(props) {
        super(props);
        getLocalData('pin_code').then(data => {pinCode = data});
        this.state = {
            backClickCount: 0,
            pinCode: '',
            alertError: ''
        }
    }
    _checkCode = (code) => {
        //alert(code);
        if(code === pinCode){
            this.props.navigation.navigate('Main');
            this.setState({code: ''});
        } else {
            this.setState({code: ''});
            this.setState({alertError: 'pin code incorrect'})
        }
    }
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
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress = {Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={[styles.logoContainer, {flex: 1, justifyContent: 'flex-end'}]}>
                                <Image style={styles.logo}
                                    source={require('../../images/favicon.png')} >
                                </Image>
                                <Image style={styles.appName}
                                    source={require('../../images/web_name.png')}>
                                </Image>
                            </View>
                            
                            <View style={[styles.buttonContainer, {flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                                <Text style={{fontSize: 20, color: '#fff'}}>Enter PIN code</Text>
                                <Text style={{color: 'red'}}>{this.state.alertError}</Text>
                                <SmoothPinCodeInput
                                    password mask="⭑"
                                    autoFocus = {true}
                                    ref={this.pinInput}
                                    codeLength={6}
                                    cellStyle ={styles.cellPinCode}
                                    cellStyleFocused = {styles.cellPinCodeFocused}
                                    textStyle = {styles.cellTextStyle}
                                    value={this.state.code}
                                    onTextChange={code => this.setState({ code })}
                                    onFulfill={this._checkCode}
                                    />
                                <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Login')}>
                                    <Text style={styles.linkText}>Forgot PIN ?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
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
        width: 90,
        height: 90
    },
    appName: {
        width: 210,
        height: 30,
        marginVertical: 20
    },
    buttonContainer: {
        paddingVertical: 20,
        marginTop: 0,
        justifyContent: 'flex-start'
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 5,
        fontSize: 16,

    },
    button: {
        backgroundColor: '#075e8f',
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
        color: '#ccc'
    },
    cellPinCode: {
        borderWidth: 2,
        borderColor: '#fff'
    },
    cellPinCodeFocused: {

    },
    cellTextStyle: {
        color: '#fff',
        fontSize: 25
    }
})