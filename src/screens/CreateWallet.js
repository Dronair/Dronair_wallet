import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform,
        SafeAreaView, StatusBar, Image,
        TextInput, TouchableOpacity, Keyboard,
        TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
Icon.loadFont();

export default class CreateWallet extends Component {
    signup(){
        
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
                                    placeholder = 'Enter your name'
                                    placehoderTextColor = '#ccc'
                                    returnKeyType = 'next'
                                    autoCorrect = {false}
                                />
                                <TextInput 
                                    style={styles.input}
                                    placeholder = 'Enter your email'
                                    placehoderTextColor = '#ccc'
                                    keyboardType = 'email-address'
                                    returnKeyType = 'next'
                                    autoCorrect = {false}
                                />
                                <TextInput 
                                    style={styles.input}
                                    placeholder = 'Enter your password'
                                    placehoderTextColor = '#ccc'
                                    returnKeyType = 'next'
                                    autoCorrect = {false}
                                    secureTextEntry
                                />
                                <TextInput 
                                    style={[styles.input,{marginBottom: 15}]}
                                    placeholder = 'Re-enter your password'
                                    placehoderTextColor = '#ccc'
                                    returnKeyType = 'go'
                                    autoCorrect = {false}
                                    secureTextEntry
                                />
                                <Text style={styles.textNote}>
                                    By clicking on the "Create wallet" button, you agree to our terms of service.
                                </Text>
                                <TouchableOpacity style={[styles.button, {marginBottom: 25, backgroundColor: '#41b9ff'}]}
                                onPress = {()=>this.props.navigation.navigate('Splash')}>
                                    <Text style={styles.buttonText}>Create wallet</Text>
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
    textNote: {
        marginHorizontal: 25,
        color: '#e2e0e0',
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})