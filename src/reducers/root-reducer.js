import { Map } from 'immutable';

const initialState = Map({
    entries: []
});

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ENTRIES':
            return state.update('entries', () => action.payload);
        case 'ADD_ENTRY':
            return state.update('entries', (entries) => entries.concat(action.payload));
        default:
            return state;
    }
}


