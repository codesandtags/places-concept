import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';
import { Button } from 'react-native-paper';
import ButtonStyles from '../styles/Buttons';
import * as Picker from 'expo-image-picker';
import { LocationData } from 'expo-location/src/Location';
import MapPreview from './MapPreview';

type Props = {
};

const LocationPicker = (props: Props) => {
    const [lat, setLat] = useState(0.0);
    const [lng, setLng] = useState(0.0);
    const [isFetchingLocation, setIsFetchingLocation] = useState(false);
    const requestPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        console.log(result);

        if (result.status !== 'granted') {
            Alert.alert('Insufficient permisions',
                'You need to grant permissions to add the location.',
                [{text: 'Ok'}]
            );
            return false;
        }

        return true;
    }

    const getLocationHandler = async () => {
        const hasPermission = await requestPermissions();
        try {
            setIsFetchingLocation(true);
            const location: LocationData = await Location.getCurrentPositionAsync({
                timeout: 5000
            });

            setLat(location.coords.latitude);
            setLng(location.coords.longitude);
            setIsFetchingLocation(false);
        } catch (error) {
            setIsFetchingLocation(false);
            Alert.alert('Could not fetch location',
                'Please try again or select a point in the map',
                [{text: 'Ok'}]
            );
        }
    };


    const renderMap = () => {
        if (lat && lng) {
            return (
                <MapPreview lat={lat} lng={lng} />
            );
        }

        return (
            isFetchingLocation
                ? <ActivityIndicator size="large" color={Colors.primaryColor} />
                : <Text>No location chosen yet!</Text>
        );
    }

    return (
        <View style={styles.mapPicker}>
            <View style={styles.mapPreview}>
                {renderMap()}
            </View>
            <Button
                style={ButtonStyles.customButton}
                color={Colors.secondaryColor}
                onPress={getLocationHandler}
            >
                Get user location
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    mapPicker: {},
    mapPreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.gray,
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: 200,
    },
});

export default LocationPicker;