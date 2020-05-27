import React from 'react';
import { Button, FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { Place } from '../models/Place';
import { useSelector } from 'react-redux';
import { RootState } from '../models/RootState';

type Props = {
    navigation: any;
};

const PlacesListScreen = (props: Props) => {

    const places = useSelector((state: RootState) => {
        console.log('The state!', state);
        return state.places.places;
    });
    const renderPlace = (place: Place) => {
        return (
            <View>
                <Text>{place.title}</Text>
            </View>
        )
    };

    if (!places || places.length === 0) {
        return (
            <View>
                <Text>There is no places! Upsss</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text>PlacesList Screen!</Text>
            <FlatList
                data={places}
                renderItem={(itemList: ListRenderItemInfo<Place>) => renderPlace(itemList.item)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
});

export default PlacesListScreen;