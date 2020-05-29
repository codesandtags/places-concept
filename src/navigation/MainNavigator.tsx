import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Admin, Map, NewPlace, PlaceDetail, PlacesList } from './routes';

// Screens
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen, { optionsNewPlace } from '../screens/NewPlaceScreen';
import PlaceDetailScreen, { optionsPlaceDetail } from '../screens/PlaceDetailScreen';
import PlacesListScreen, { optionsPlaceList } from '../screens/PlacesListScreen';
import { Button } from 'react-native-paper';
import Colors from '../constants/Colors';
import { FONT_REGULAR } from '../constants/Fonts';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminScreen from '../screens/AdminScreen';

const PlacesStackNavigator = createStackNavigator();
const PlacesDrawerNavigator = createDrawerNavigator();

const PlacesDrawer = () => {
    return (
        <PlacesDrawerNavigator.Navigator>
            <PlacesDrawerNavigator.Screen name={Admin} component={AdminScreen}></PlacesDrawerNavigator.Screen>
        </PlacesDrawerNavigator.Navigator>
    )
}

const MainNavigator = () => {
    const defaultScreenOptions = {
        headerStyle: {
            backgroundColor: Colors.black
        },
        headerTintColor: Colors.white,
        headerBackTitleStyle: {
            fontFamily: FONT_REGULAR,
            fontSize: 14
        }
    };

    return (
        <NavigationContainer>
            <PlacesStackNavigator.Navigator
                initialRouteName={PlacesList}
                screenOptions={defaultScreenOptions}>
                <PlacesStackNavigator.Screen
                    name={Map}
                    component={MapScreen}
                />
                <PlacesStackNavigator.Screen
                    name={NewPlace}
                    component={NewPlaceScreen}
                    options={optionsNewPlace}
                />
                <PlacesStackNavigator.Screen
                    name={PlaceDetail}
                    component={PlaceDetailScreen}
                    options={optionsPlaceDetail}
                />
                <PlacesStackNavigator.Screen
                    name={PlacesList}
                    component={PlacesListScreen}
                    options={optionsPlaceList}
                />
            </PlacesStackNavigator.Navigator>
        </NavigationContainer>
    )
};

export default MainNavigator;