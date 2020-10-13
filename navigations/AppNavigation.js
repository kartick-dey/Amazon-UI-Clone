import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const AppDrawerNavigator = createDrawerNavigator();

export default class AppNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <NavigationContainer>
                <AppDrawerNavigator.Navigator initialRouteName="Home">
                    <AppDrawerNavigator.Screen name="Home" component={HomeScreen} />
                </AppDrawerNavigator.Navigator>
            </NavigationContainer>
        );
    }
}
