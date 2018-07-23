// App navigator (screen transitions)

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from 'components/screens/home-screen';
import ShowDetailsScreen from 'components/screens/show-details-screen';
import MapScreen from 'components/screens/map';

const HomeStackNavigator = createStackNavigator(
{
	Main: {screen: MapScreen},
	ShowDetails: {screen: ShowDetailsScreen},
},
{
	initialRouteName: 'Main',
	headerMode: 'none',
}
);

export default HomeStackNavigator;