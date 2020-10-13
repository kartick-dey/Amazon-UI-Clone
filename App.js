import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import AppNavigation from './navigations/AppNavigation';



class App extends Component {
  render() {
    return (
      <AppNavigation></AppNavigation>
    );
  }
  
};

const styles = StyleSheet.create({
  
});

export default App;
