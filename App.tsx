import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AppLoading } from 'expo';
import * as Fonts from 'expo-font';

import reduxThunk from 'redux-thunk';

import MainNavigator from './src/navigation/MainNavigator';
import { placesReducer } from './src/store/reducers/places-reducer';

import Colors from './src/constants/Colors';
import { FONT_BOLD, FONT_REGULAR } from './src/constants/Fonts';
import { initDB } from './src/helpers/db';

const rootReducer = combineReducers({
    places: placesReducer
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.black,
        accent: Colors.secondaryColor,
    },
};

const fetchFonts = () => {
    return Fonts.loadAsync({
        [FONT_REGULAR]: require('./assets/fonts/Montserrat-Regular.ttf'),
        [FONT_BOLD]: require('./assets/fonts/Montserrat-Bold.ttf'),
    });
}

initDB()
    .then((result) => {
        console.log('Heyyy!! ', result);
    })
    .catch((error) => {
        console.log('Narnia ', error);
    })


export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    if (!fontsLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }

    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <MainNavigator/>
            </PaperProvider>
        </StoreProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
