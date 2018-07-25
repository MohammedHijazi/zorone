import styled from 'styled-components/native';
import Header from 'components/common/header';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback, ScrollView, TouchableOpacity , Button} from 'react-native';
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
              description={'Almathaf Hotel is known for luxurious accommodation in Gaza, successful functions, dream weddings and delicious dining'}
              />

              <MapView.Marker
              coordinate={{latitude: 31.527455,
              longitude: 34.437353}}
              title={'Al Deira Hotel'}
              description={'The Al Deira Hotel is a beach hotel located in Gaza. It was built in 2000 and has 22 rooms which feature high, domed ceilings and views of the Mediterranean. The hotel is regularly used by foreign journalists covering Gaza'}
              />


              <MapView.Marker
              coordinate={{latitude: 31.525314,
              longitude: 34.435117}}
              title={'Roots Hotel'}
              description={'Roots Hotel offers an intimate yet informal atmosphere where you can dine comfortably with friends, family or colleagues and always be sure you will enjoy good quality food. Talented chefs and experienced restaurant teams go the extra mile to ensure that your dining experience is a special one. '}
              />


              <MapView.Marker
              coordinate={{latitude: 31.522228,
              longitude: 34.444012}}
              title={'Marna House'}
              description={'Marna House Hotel, has been associated with it’s name on Gaza City, the ancient Since its founding in 1946 . It was the first hotel and the residence of many celebrities and dignitaries who visited Gaza City, including the Queen of Jordan, has also a great writer, "Taha Hussein," the global Journalist, "Robert Fisk," and many international figures that have left behind fond memories spent in the Marna House Hotel, and still embodies the whereabouts fragrant history of Gaza and beauty.'}
              />

              <MapView.Marker
              coordinate={{latitude: 31.545478,
              longitude: 34.454006}}
              title={'Blue Beach Resort'}
              description={'The Blue Beach Resort is a luxury beach resort hotel that opened in Gaza in the summer of 2015. The hotel features cabana boys serving clients on its private beach, and an Olympic-size swimming pool.'}
              />



              <MapView.Marker //Hospitals
              coordinate={{latitude: 31.524373,
              longitude: 34.442911}}
              title={'Shifa Hospital'}
              description={'Al-Shifa Hospital, properly known as Dar Al-Shifa Hospital is the largest medical complex and central hospital in the Gaza Strip, located in the neighbourhood of North Rimal in Gaza City in the Gaza Governorate.'}
              />

              <MapView.Marker
              coordinate={{latitude: 31.507003,
              longitude: 34.439313}}
              title={'Gaza field hospital of the Jordanian'}
              description={' The first convoy of a new Jordanian field hospital team arrived in the Gaza Strip on Monday, laden with medicines and medical supplies, the Jordan News Agency, Petra, reported on Tuesday.'}
              />



              <MapView.Marker
              coordinate={{latitude: 31.505967,
              longitude: 34.430625}}
              title={'Al-Quds hospital'}
              description={'The al-Quds Hospital was a hospital located in the Gaza Strip which was damaged by Israeli forces in 2009.[1] Plans for repairing the hospital started soon afterwards, with the support of France and Qatar.'}
              />




              <MapView.Marker //Mosques
              coordinate={{latitude: 31.547850,
              longitude: 34.455880}}
              title={'Al-Khaldy mosque'}
              description={'Palestinians enjoy the sunset at the al-Khaldi mosque on the beachfront north of Gaza City shortly before the entire area is plunged into darkness due to the ongoing power outage.'}
              />

              <MapView.Marker //Mosques
              coordinate={{latitude: 31.504306,
              longitude: 34.464418}}
              title={'Omari Grand Mosque'}
              description={"The Great Mosque of Gaza also known as the Great Omari Mosque is the largest and oldest mosque in the Gaza Strip, located in Gaza's old city."}
              />


              <MapView.Marker
              coordinate={{latitude: 31.523000,
              longitude: 34.432509}}
              title={'Al-Hasaina mosque'}
              description={'is a new mosque in gaza city,built on the port of Gaza city.'}
              />

              <MapView.Marker
              coordinate={{latitude: 31.508055,
              longitude: 34.463376}}
              title={'Al Saayed Hashem Ibn Abd Manaf Mosque'}
              description={"The Sayed al-Hashim Mosque is one of the largest and oldest mosques in Gaza, located in the ad-Darrāj Quarter of the Old City, off of al-Wehda Street. The tomb of Hashim ibn Abd al-Manaf, Muhammad's great grandfather who died in Gaza during a trading voyage, is located under the dome of the mosque according to Muslim tradition."}
              />


              <MapView.Marker //Church 
              coordinate={{latitude: 31.503830,
              longitude: 34.462134}}
              title={'Church of Saint Porphyriu'}
              description={'The Church of Saint Porphyrius is the Orthodox Christian church of Gaza, and the oldest active church in the city. '}
              />




              <MapView.Marker //gyms
              coordinate={{latitude: 31.509156,
              longitude: 34.433034}}
              title={'Techno gym'}
              description={'is a gym with new techniques for athelets.'}
              />


              <MapView.Marker //gyms
              coordinate={{latitude: 31.515977,
              longitude: 34.449376}}
              title={'Capital Mall'}
              description={'#'}
              />


               <MapView.Marker //Sea Port
              coordinate={{latitude: 31.524025,
              longitude: 34.432544}}
              title={'Sea Port'}
              description={'Sea port is one of the most visited places for the gazians.'}
              />
              


            </MapView>



    );

   }

}

export default MapScreen;
