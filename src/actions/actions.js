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

function setR(r){
    return{
        type: 'SET_R',
        payload: r
    }
}

function clearEntries(){
    return{
        type: 'CLEAR_ENTRIES',
        payload: []
    }
}

export { setEntries, addEntry, setR, clearEntries }