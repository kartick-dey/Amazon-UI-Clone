import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Header, Left, Right, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#3a455c', height: 90, borderBottomColor: '#757575' }}>
                    <Left style={{ alignItems: 'center', }}>
                        <Icon name="md-menu" style={{ color: 'white'}}></Icon>
                    </Left>
                </Header>
            </Container>
        );
    }
}
