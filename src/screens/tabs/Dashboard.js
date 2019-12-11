import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';

export default class Dashboard extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'md-home' } style={{color: tintColor}} />
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>This is Dashboard</Text>
                </Content>
            </Container>
        )
    }
}
