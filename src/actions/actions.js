function setEntries(entries) {
    return {
        type: 'SET_ENTRIES',
        payload: entries
    };
}

function addEntry(entry) {
    return {
        type: 'ADD_ENTRY',
        payload: entry
    };
}

function changeR(r){
    return{
        type: 'CHANGE_R',
        payload: r
    }
}

export { setEntries, addEntry }