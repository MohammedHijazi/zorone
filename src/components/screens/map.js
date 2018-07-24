import styled from 'styled-components/native';
import Header from 'components/common/header';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';
import TimerMixin from 'react-timer-mixin';




 var styles = StyleSheet.create({
 	hotels:{
 		backgroundColor: '#FFF',
 	}

});



class MapScreen extends Component {
  render(){
    return (
	      <MapView
	        style={{
	          flex:1
	        }}
	        initialRegion={{
	          latitude: 31.428575,
	          longitude: 34.379642,
	          latitudeDelta: 0.4972,
	          longitudeDelta: 0.07721
	        }}
	        
	        >

	        <MapView.Marker //Hotels
	  
            coordinate={{latitude: 31.547625,
            longitude: 34.456887}}
            title={'Al Mathaf Hotel'}
            description={'Batata'}
            />

            <MapView.Marker 
            coordinate={{latitude: 31.527455,
            longitude: 34.437353}}
            title={'Al Dera Hotel'}
            description={'Bamia'}
            />


            <MapView.Marker 
            coordinate={{latitude: 31.525314,
            longitude: 34.435117}}
            title={'Roots Hotel'}
            description={'koda'}
            />


            <MapView.Marker 
            coordinate={{latitude: 31.522228,
            longitude: 34.444012}}
            title={'Marna House'}
            description={'tomato'}
            />

            <MapView.Marker
            coordinate={{latitude: 31.545478,
            longitude: 34.454006}}
            title={'Blue Beach Resort'}
            description={'MAMA'}
            />



            <MapView.Marker //Hospitals
            coordinate={{latitude: 31.524373,
            longitude: 34.442911}}
            title={'Shifa Hospital'}
            description={'MAMA'}
            />

            <MapView.Marker
            coordinate={{latitude: 31.507003,
            longitude: 34.439313}}
            title={'Gaza field hospital of the Jordanian'}
            description={'BaBa'}
            />



            <MapView.Marker
            coordinate={{latitude: 31.505967,
            longitude: 34.430625}}
            title={'Al-Quds hospital'}
            description={'TaTa'}
            />




            <MapView.Marker //Mosques
            coordinate={{latitude: 31.547850,
            longitude: 34.455880}}
            title={'Al-Khaldy mosque'}
            description={'TaTa'}
            />


            <MapView.Marker
            coordinate={{latitude: 31.523000,
            longitude: 34.432509}}
            title={'Al-Hasaina mosque'}
            description={'TaTa'}
            />




            <MapView.Marker //gyms
            coordinate={{latitude: 31.509156,
            longitude: 34.433034}}
            title={'Techno gym'}
            description={'TaTa'}
            />


             <MapView.Marker //Sea Port
            coordinate={{latitude: 31.524025,
            longitude: 34.432544}}
            title={'Sea Port'}
            description={'TaTa'}
            />



            </MapView>        	

    );
  }
}

export default MapScreen;