import React from 'react';
import {
    FlatList, Image,
    ListRenderItemInfo,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Place } from '../models/Place';
import { useSelector } from 'react-redux';
import { RootState } from '../models/RootState';
import Colors from '../constants/Colors';
import { Button, IconButton } from 'react-native-paper';
import { NewPlace } from '../navigation/routes';
import PlaceItem from '../components/PlaceItem';

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
            <PlaceItem place={place} />
        )
    };

    if (!places || places.length === 0) {
        return (
            <View style={styles.screen}>
                <IconButton
                    style={styles.noPlacesIcon}
                    icon="map-search"
                    color={Colors.primaryColor}
                    size={70}
                    onPress={() => console.log('Pressed')}
                />
                <Text style={styles.noPlacesText}>🙈 There is no places!</Text>
                <Text style={styles.noPlacesText}>Please add a place to the list.</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.placesTitle}>These are your places: </Text>
            <FlatList
                data={places}
                renderItem={(itemList: ListRenderItemInfo<Place>) => renderPlace(itemList.item)}
            />
        </View>
    )
};

export const optionsPlaceList = (props: any) => {
    return {
        title: '🌎 Places',
        headerRight: (navigationProperties: any) => {
            return (
                <Button
                    color={Colors.white}
                    icon="plus"
                    onPress={() => props.navigation.navigate(NewPlace)}>
                </Button>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: Colors.gray
    },
    placesTitle: {
        fontSize: 22,
        marginBottom: 15
    },
    noPlacesIcon: {
        alignSelf: 'center',
    },
    noPlacesText: {
        textAlign: 'center',
        fontSize: 20
    },
});

export default PlacesListScreen;