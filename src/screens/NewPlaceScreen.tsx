import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import Colors from '../constants/Colors';

import { PlaceDetail, PlacesList } from '../navigation/routes';
import FormStyles from '../styles/Forms';
import { useDispatch } from 'react-redux';
import { addPlace } from '../store/actions/places-actions';

type Props = {
    navigation: any;
};

const NewPlaceScreen = (props: Props) => {
    const [place, setPlace] = useState('');
    const dispatch = useDispatch();

    const handlerSetPlace = (value: string) => {
        setPlace(value);
    };
    const handleSavePlace = () => {
        dispatch(addPlace(place));
        props.navigation.navigate(PlacesList);
    }

    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={FormStyles.formControl}>
                    <TextInput
                        mode="outlined"
                        label="Place"
                        placeholder="Enter your place"
                        value={place}
                        onChangeText={handlerSetPlace}
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                    />
                </View>
                <Button
                    color={Colors.primaryColor}
                    onPress={handleSavePlace}
                >
                    Save Place
                </Button>
            </View>
        </ScrollView>
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

export default NewPlaceScreen;