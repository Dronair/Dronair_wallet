import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform,
        SafeAreaView, StatusBar, Image,
        TextInput, TouchableOpacity, Keyboard,
        TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
Icon.loadFont();

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    
    login = () => {
        fetch('https://dronair.io/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'vuphonggt.96@gmail.com',
                password: 'vp26101996',
            }),
            }).then((response) => alert(response.status));
            //.then((responseJson) => alert(responseJson.api_token));
        //this.props.navigation.navigate('Main');
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />
                <TouchableOpacity style={{padding: 10}} onPress = {()=>this.props.navigation.goBack()}>
                    <Icon name="arrowleft" color="#eee" size={30}/>
                </TouchableOpacity>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress = {Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={[styles.logoContainer, {flex: 1}]}>
                                <Image style={styles.logo}
                                    source={require('../images/favicon.png')} >
                                </Image>
                                <Image style={styles.appName}
                                    source={require('../images/web_name.png')}>
                                </Image>
                            </View>
                            
                            <View style={[styles.buttonContainer, {flex: 2}]}>
                                <TextInput 
                                    style={styles.input}
                                    placeholder = 'Enter your email'
                                    placehoderTextColor = '#ccc'
                                    keyboardType = 'email-address'
                                    returnKeyType = 'next'
                                    autoCorrect = {false}
                                    onSubmitEditing = {() => this.refs.passwordInput.focus()}
                                    onChangeText = {text => this.setState({email: text})}
                                />
                                <TextInput 
                                    ref = {'passwordInput'}
                                    style={[styles.input,{marginBottom: 25}]}
                                    placeholder = 'Enter your password'
                                    placehoderTextColor = '#ccc'
                                    returnKeyType = 'go'
                                    autoCorrect = {false}
                                    secureTextEntry
                                    onChangeText = {text => this.setState({password: text})}
                                    onSubmitEditing = {this.login}

                                />
                                <TouchableOpacity style={styles.button} onPress = {()=>{this.login()}}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {()=>this.props.navigation.navigate('LostPasswordWeb')}>
                                    <Text style={styles.linkText}>Forgot password ?</Text>
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
    }
})