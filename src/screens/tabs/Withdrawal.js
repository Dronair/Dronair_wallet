import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class Withdrawal extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Icon name='paper-plane' style={{color: tintColor}} />
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>This is Withdrawal</Text>
                </Content>
            </Container>
        )
    }
}
