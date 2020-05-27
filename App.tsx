import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider as StoreProvider} from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import reduxThunk from 'redux-thunk';

import MainNavigator from './src/navigation/MainNavigator';

import Colors from './src/constants/Colors';
import { placesReducer } from './src/store/reducers/places-reducer';

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

export default function App() {
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
