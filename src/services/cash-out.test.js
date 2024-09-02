const { cashOutForLegal, cashOutForNatural } = require('./cash-out');
const {
    transitionsCashOut,
    cashOutNaturalConfig,
    cashOutJuridicalConfig,
} = require('../__mocks__');

describe('cashOutForLegal', () => {
    test('should return fee if amount is bigger than config min amount', () => {
        const result = cashOutForLegal({
            amount: 200,
            config: cashOutJuridicalConfig,
        });

        expect(result).toEqual('0.60');
    });

    test('should return fee if amount is less than config min amount', () => {
        const result = cashOutForLegal({
            amount: 100,
            config: cashOutJuridicalConfig,
        });

        expect(result).toEqual('0.50');
    });
});

describe('cashOutForNatural', () => {
    test('should return list of fees for natural transactions if amount is bigger than config week limit amount', () => {
        const results = [];
        const weeklyUsage = {};

        transitionsCashOut.forEach(({ user_id, date, operation }) => {
            results.push(
                cashOutForNatural({
                    amount: operation.amount,
                    config: cashOutNaturalConfig,
                    data: {
                        userId: user_id,
                        date,
                    },
                    weeklyUsage,
                })
            );
        });

        expect(results).toEqual(['87.00', '3.00', '0.30', '0.30']);
    });

    test('should return list of fees for natural transactions if amount is less than config week limit amount', () => {
        const results = [];
        const weeklyUsage = {};

        const transactions = [transitionsCashOut[1]];

        transactions.forEach(({ user_id, date, operation }) => {
            results.push(
                cashOutForNatural({
                    amount: operation.amount,
                    config: cashOutNaturalConfig,
                    data: {
                        userId: user_id,
                        date,
                    },
                    weeklyUsage,
                })
            );
        });

        expect(results).toEqual([0]);
    });
});
