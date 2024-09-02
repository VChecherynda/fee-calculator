function convertToCents(eur) {
    if (typeof eur !== 'number') {
        return
    }
    
    return eur * 100
}

function convertToEur(cents) {
    if (typeof cents !== 'number') {
        return
    }

    return cents / 100
}

module.exports = {
    convertToCents,
    convertToEur
};