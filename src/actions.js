const xChanged = (x) => {
    return {
        type: 'X_CHANGED',
        x
    }
}

const yChanged = (y) => {
    return {
        type: 'Y_CHANGED',
        y
    }
}

const rChanged = (r) => {
    return {
        type: 'R_CHANGED',
        r
    }
}

module.exports = {xChanged, yChanged, rChanged}