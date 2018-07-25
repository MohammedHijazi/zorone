import styled from 'styled-components/native';
import Header from 'components/common/header';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback, ScrollView, TouchableOpacity ,Button,Alert,AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';
import TimerMixin from 'react-timer-mixin';
//import Slideshow from 'react-native-slideshow';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';

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
        margin:50,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
      }
});

class ButtonsPage extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} title="  Gaza " color="#00FF00" accessibilityLabel="Tap on Me"/>
        </View>


        <View style={styles.buttonContainer}>
          <Button onCone={this._onCone} title=" Culture" color="#00FF00" accessibilityLabel="Tap on Me"/>
        </View>


        <View style={styles.buttonContainer}>
          <Button onDone={this._onDone} title="Jericho" color="#00FF00" accessibilityLabel="Tap on Me"/>
        </View>



      </View>




  
    );
  }

  _onPress = () => {
    this.props.navigation.navigate('Map');

  }
  
  _onDone = () => {
    Alert.alert('Coming Soon!');\

}

  _onCone = () => {
    this.props.navigation.navigate('culture');

  }



}



export default ButtonsPage;
