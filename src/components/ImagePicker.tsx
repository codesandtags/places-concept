import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import * as Picker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';
import { Button } from 'react-native-paper';
import ButtonStyles from '../styles/Buttons';

type Props = {
    onTakeImage: Function
};

const ImagePicker = (props: Props) => {
    const [pickedImage, setPickedImage] = useState('');
    const requestPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        console.log(result);

        if (result.status !== 'granted') {
            Alert.alert('Insufficient permisions',
                'You need to grant permissions to add the picture.',
                [{text: 'Ok'}]
            );
            return false;
        }

        return true;
    }
    const takeImageHandler = async () => {
        const hasPermission = await requestPermissions();
        const image: any = await Picker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        setPickedImage(image.uri);
        props.onTakeImage(image.uri);
    };


    const renderImage = () => {
        console.log('The picked image is : ', pickedImage);

        if (pickedImage) {
            return (
                <Image
                    style={styles.image}
                    source={{
                        uri: pickedImage
                    }}/>
            );
        }

        return (
            <Text>No image picked yet!</Text>
        );
    }

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {renderImage()}
            </View>
            <Button
                style={ButtonStyles.customButton}
                color={Colors.secondaryColor}
                onPress={takeImageHandler}
            >
                Take picture
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    imagePicker: {},
    imagePreview: {
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

export default ImagePicker;