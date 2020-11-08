import { Map } from 'immutable';

const initialState = Map({
    entries: [],
    r: NaN
});

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ENTRIES':
            return state.update('entries', () => action.payload);
        case 'ADD_ENTRY':
            return state.update('entries', (entries) => entries.concat(action.payload));
        case 'SET_R':
            return state.update('r', () => action.payload )
        case 'CLEAR_ENTRIES':
            return state.update('entries', () => [])
        default:
            return state;
    }
}


