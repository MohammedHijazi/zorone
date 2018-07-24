import styled from 'styled-components/native';
import Header from 'components/common/header';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';
import TimerMixin from 'react-timer-mixin';
//import Slideshow from 'react-native-slideshow';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});
 
const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../../assets/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../../assets/2.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../assets/3.jpeg'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },

  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../assets/3.jpeg'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
];



class SlideScreen extends Component {
	  _onDone = () => {
	    this.props.navigation.navigate('Map')
	}

	  render() {
	    return (
	      <AppIntroSlider
	      	onDone={this._onDone}
	        slides={slides}
	        renderItem={this._renderItem}
	        bottomButton
	        //showPrevButton
	        showSkipButton
	        // hideNextButton
	        // hideDoneButton
	        // onSkip={() => console.log("skipped")}
	      />
	    );
	  }
	}

export default SlideScreen;