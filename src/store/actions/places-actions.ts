import * as FileSystem from 'expo-file-system';
import { Place } from '../../models/Place';
import { getPlaces, insertPlace } from '../../helpers/db';
import { SQLResultSet } from 'expo-sqlite';

// Action Types
export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';

// Action Creators
export const addPlace = (title: string, image: string, address = '', lat = 0.0, lng = 0.0) => {
    return async (dispatch: any) => {
        try {
            const fileName = image.split('/').pop();
            let newPath = image;
            if (FileSystem.documentDirectory) {
                newPath = FileSystem.documentDirectory + image.split('/').pop();

                console.log('The FileSystem is: ', FileSystem.documentDirectory);
                console.log('Image is: ', image);

                await FileSystem.moveAsync({
                    from: image,
                    to: newPath
                });

                const dbResult: SQLResultSet = <SQLResultSet>await insertPlace(title, newPath, address, lat, lng);
                console.log(' Result SQL => ', dbResult);

                const place: Place = {
                    id: dbResult.insertId.toString(),
                    title,
                    image: newPath,
                    address,
                    lat,
                    lng
                };

                dispatch({
                    type: ADD_PLACE,
                    payload: place
                });
            }
        } catch (error) {
            console.log('Upsss ', error);
        }
    };
}

export const loadPlaces = () => {
    return async (dispatch: Function) => {
        try {
            const dbResult: any = await getPlaces();
            const places: Place[] = dbResult.rows._array.map((place: Place) => {
                return {
                    ...place,
                    id: place.id.toString()
                };
            });

            dispatch({
                type: SET_PLACES,
                payload: places
            })
        } catch (error) {
            console.log('Upsss ', error);
        }
    }
}