import { createStore } from 'redux';
import {
    initialState,
} from "../utils/config";

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_CITIES': {
            return {
                cities: action.data,
                selected: state.selected,
            }
        }
        case 'SELECT_CITY': {
            return {
                cities: state.cities,
                selected: action.data,
            }
        }
        default:
            return state
    }
}

let store = createStore(reducer);

export default store;