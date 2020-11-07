import { Map } from 'immutable';

const initialState = Map({
    entries: []
});

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ENTRIES':
            return state.update('entries', () => action.entries);
        default:
            return state;
    }
}


