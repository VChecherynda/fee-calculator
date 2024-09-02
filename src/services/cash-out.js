const { getWeekKey } = require('../helpers/utils/date-utils');
const { roundUp } = require('../helpers/utils/rounding');
const { convertToCents, convertToEur } = require('../helpers/utils/convertors');
const { convertPercents } = require('../helpers/utils/percent');

function cashOutForLegal({ amount, config }) {
    if (amount && config) {
        const amountCents = convertToCents(amount);
        const minAmountCents = convertToCents(config.min.amount);
        const fee = convertPercents(amountCents, config.percents);

        if (fee < minAmountCents) {
            return roundUp(convertToEur(minAmountCents));
        }

        return roundUp(convertToEur(fee));
    }
}

function cashOutForNatural({ amount, config, data, weeklyUsage }) {
    if (amount && config && data && weeklyUsage) {
        const amountCents = convertToCents(amount);
        const weekLimitAmountCents = convertToCents(config.week_limit.amount);

        const weekKey = getWeekKey(data.date);
        const weekAmountCents =
            (weeklyUsage[data.userId]?.[weekKey] ?? 0) + amountCents;

        if (weekAmountCents <= weekLimitAmountCents) {
            return 0;
        } else {
            const isLimitOvercome = amountCents > weekLimitAmountCents;

            const overcomeAmountCents = isLimitOvercome
                ? amountCents - weekLimitAmountCents
                : amountCents;

            const feeCents = convertPercents(
                overcomeAmountCents,
                config.percents
            );

            weeklyUsage[data.userId] = {
                [weekKey]: weekAmountCents,
            };

            return roundUp(convertToEur(feeCents));
        }
    }
}

module.exports = {
    cashOutForLegal,
    cashOutForNatural,
};
