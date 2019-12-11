import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class Deposit extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Icon name='md-download' style={{color: tintColor}} />
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>This is Deposit</Text>
                </Content>
            </Container>
        )
    }
}
