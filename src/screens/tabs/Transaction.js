import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class Transaction extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Icon name='md-list-box' style={{color: tintColor}} />
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>This is Transaction</Text>
                </Content>
            </Container>
        )
    }
}
