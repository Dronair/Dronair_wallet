import React, { Component } from 'react';
import { Container, Text, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Swap extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Icon name='exchange' style={{color: tintColor, fontSize: 20}} />
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>This is Swap</Text>
                </Content>
            </Container>
        )
    }
}
