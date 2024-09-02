const { roundUp } = require('../helpers/utils/rounding');
const { convertToCents, convertToEur } = require('../helpers/utils/convertors');
const { convertPercents } = require('../helpers/utils/percent');

function cashIn({ amount, configs: { cashInConfig } }) {
    if (!cashInConfig) {
        return;
    }

    const amountCents = convertToCents(amount);
    const maxAmountCents = convertToCents(cashInConfig.max.amount);

    if (amountCents > maxAmountCents) {
        const fee = convertPercents(amountCents, cashInConfig.percents);
        const feeEur = convertToEur(fee);

        return roundUp(feeEur);
    }

    return 0;
}

module.exports = {
    cashIn,
};
