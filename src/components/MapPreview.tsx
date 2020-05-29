import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { API } from '../constants/Api';

type Props = {
    lat: number,
    lng: number
};

const MapPreview = (props: Props) => {
    console.log('Props : ', props);
    const imagePreviewUrl = API.GET_IMAGE_URL(props.lat, props.lng);

    return (
        <View style={styles.mapPreviewContainer}>
            <View style={styles.mapImageContainer}>
                <Image
                    style={styles.mapImage}
                    source={{
                        uri: imagePreviewUrl
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mapPreviewContainer: {
        flex: 1,
        width: '100%',
    },
    mapImageContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    mapImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    }
});

export default MapPreview;