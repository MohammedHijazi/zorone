import styled from 'styled-components/native';
import Header from 'components/common/header';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';
import TimerMixin from 'react-timer-mixin';
<<<<<<< HEAD
=======
//import Slideshow from 'react-native-slideshow';
>>>>>>> 0e0b42c... hadi
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
    title: 'Welcome to Gaza !',
    text: 'Use Zuruni to discover the best .\n Restaurants, Hotels and attractions here in Gaza !',
    image: require('../../../assets/gaza.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Curated by locals',
    text: 'All our tips information comes from Gazans , \n Who Know the best blaus to go !',
    image: require('../../../assets/pepole.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#ffb3b3',
  },
  {
    key: 'somethun1',
    title: 'Stat Exploring !',
    text: 'We can\'t wait for you to experience \n our Palestine ',
    image: require('../../../assets/explore.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#b561d1',
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