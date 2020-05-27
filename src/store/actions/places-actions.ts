import { Action } from '../../models/Action';
import { Place } from '../../models/Place';
import { getRandomId } from '../../utils/randoms';

// Action Types
export const ADD_PLACE = 'ADD_PLACE';

// Action Creators
export const addPlace = (title: string): Action => {

    const place: Place = {
        id: getRandomId(4),
        title: title
    };

    return {
        type: ADD_PLACE,
        payload: place
    }
}