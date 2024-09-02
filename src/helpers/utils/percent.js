function convertPercents(amount, percents) {
    if (typeof amount !== 'number' || typeof percents !== 'number') {
        return;
    }

    return (amount / 100) * percents;
}

module.exports = {
    convertPercents,
};
