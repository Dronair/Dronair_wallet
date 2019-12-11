import React, { Component } from 'react';
import { Container } from 'native-base';
import { WebView, StatusBar } from 'react-native';
export default class HomeWeb extends Component {
    render() {
    return (
        <Container>
          <StatusBar barStyle='dark-content' />
          <WebView
            source={{uri: 'https://dronair.io'}}
          />
        </Container>
      
    );
  }
}

