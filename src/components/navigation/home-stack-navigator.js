// App navigator (screen transitions)

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from 'components/screens/home-screen';
import MapScreen from 'components/screens/map';
import SlideScreen from 'components/screens/slidescreen';
import CulturePage from 'components/screens/culture';





const HomeStackNavigator = createStackNavigator(
{
	Main: {screen: CulturalPage},
	Map: {screen : MapScreen},
	culture:{screen:CulturePage};
},
{
	initialRouteName: 'Main',
	headerMode: 'none',
}
);

export default HomeStackNavigator;