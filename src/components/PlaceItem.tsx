import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';
import { Place } from '../models/Place';

type Props = {
    place: Place
};

const PlaceItem = (props: Props) => {
    const place = props.place;

    return (
        <TouchableOpacity>
            <View style={styles.placeContainer}>
                <View style={styles.placeImageContainer}>
                    <Image
                        style={styles.placeImage}
                        source={{
                            uri:'https://www.sohohotel.ca/wp-content/uploads/2019/10/things-to-do-in-toronto-part-1-256x256.jpg'
                        }}
                    />
                </View>
                <View style={styles.placeSummary}>
                    <Text style={styles.placeTitle}>{place.title}</Text>
                    <Text style={styles.placeDescription}>Description....</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    placeContainer: {
        width: '100%',
        padding: 10,
        borderColor: Colors.darkGray,
        borderWidth: 0.5,
        borderRadius: 5,
        marginBottom: 15,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 1},
        shadowColor: Colors.darkGray,
    },
    placeTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    placeDescription: {
        fontSize: 14
    },
    placeImageContainer: {
        width: '30%',
        paddingHorizontal: 10,
    },
    placeImage: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
        borderWidth: 0.5,
        borderRadius: 100
    },
    placeSummary: {
        width: '70%',
        paddingHorizontal: 5,
    }
});

export default PlaceItem;