import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Map, NewPlace, PlaceDetail, PlacesList } from './routes';

// Screens
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlacesListScreen from '../screens/PlacesListScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={NewPlace}>
                <Stack.Screen name={Map} component={MapScreen} />
                <Stack.Screen name={NewPlace} component={NewPlaceScreen}/>
                <Stack.Screen name={PlaceDetail} component={PlaceDetailScreen}/>
                <Stack.Screen name={PlacesList} component={PlacesListScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainNavigator;