import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, AppRegistry } from 'react-native';

class MainApp extends Component {

_onPress() {
  Alert.alert('on Press!');
 }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} title="Gaza" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 9
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})

AppRegistry.registerComponent('MainApp', () => MainApp);