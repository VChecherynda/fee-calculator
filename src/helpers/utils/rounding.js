function roundUp(amount) {
    if (typeof amount !== 'number') {
        return;
    }

    const roundedNumber = Math.ceil(amount * 100) / 100;

    return roundedNumber.toFixed(2);
}

module.exports = {
    roundUp,
};
