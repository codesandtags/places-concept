import { Action } from '../../models/Action';
import { PlaceState } from '../../models/PlaceState';
import { ADD_PLACE } from '../actions/places-actions';

const initialState: PlaceState = {
    places: [],
}

export const placesReducer = (state: PlaceState = initialState, action: Action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                places: state.places.concat(action.payload)
            }

        default:
            return state;
    }
}