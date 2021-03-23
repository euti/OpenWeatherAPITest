import { createStore } from 'redux';
import {
    initialState,
} from "../utils/config";


function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

let store = createStore(reducer);

export default store;