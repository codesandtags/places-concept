import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

type Props = {
    navigation: any;
};

const PlaceDetailScreen = (props: Props) => {

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primaryColor}/>
            <Text>PlaceDetail Screen!</Text>
        </View>
    )
};

export const optionsPlaceDetail = (props: any) => {
    console.log(props);
    const place = props.route.params.place;

    return {
        title: place.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
});

export default PlaceDetailScreen;