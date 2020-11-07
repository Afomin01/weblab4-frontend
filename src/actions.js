function setEntries(entries) {
    return {
        type: 'SET_ENTRIES',
        entries
    };
}

function addEntry(entry) {
    return {
        type: 'ADD_ENTRY',
        entry
    };
}

export { setEntries, addEntry }