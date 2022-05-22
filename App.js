import {Text, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import MainNavigation from './navigation/MainNavigation';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <MainNavigation />
      </SafeAreaView>
    );
  }
}

export default App;
