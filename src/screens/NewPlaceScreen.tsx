import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import Colors from '../constants/Colors';

import { PlacesList } from '../navigation/routes';
import FormStyles from '../styles/Forms';
import { useDispatch } from 'react-redux';
import { addPlace } from '../store/actions/places-actions';
import ButtonStyles from '../styles/Buttons';
import ImagePicker from '../components/ImagePicker';
import { Place } from '../models/Place';
import LocationPicker from '../components/LocationPicker';
import MapPreview from '../components/MapPreview';

type Props = {
    navigation: any;
};

const NewPlaceScreen = (props: Props) => {
    const [placeName, setPlaceName] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const dispatch = useDispatch();

    const handlerSetPlace = (value: string) => {
        setPlaceName(value);
    };
    const handleSavePlace = () => {
        dispatch(addPlace(placeName, selectedImage));
        props.navigation.navigate(PlacesList);
    }
    const handleImageTaken = (imageUri: string) => {
        setSelectedImage(imageUri);
    }

    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={FormStyles.formControl}>
                    <TextInput
                        mode="outlined"
                        label="Place"
                        placeholder="Enter your place"
                        value={placeName}
                        onChangeText={handlerSetPlace}
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                    />
                </View>
                <ImagePicker onTakeImage={handleImageTaken}/>
                <LocationPicker />
                <Button
                    style={ButtonStyles.customButton}
                    mode="contained"
                    color={Colors.primaryColor}
                    onPress={handleSavePlace}
                >
                    Save Place
                </Button>
            </View>
        </ScrollView>
    )
};

export const optionsNewPlace = (props: any) => {
    return {
        title: 'New Place',
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

export default NewPlaceScreen;