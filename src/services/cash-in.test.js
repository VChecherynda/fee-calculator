const { cashIn } = require('./cash-in');
const { cashInConfig } = require('../__mocks__');

describe('cashIn', () => {
    test('should return fee if amount is bigger than max amount', () => {
        const result = cashIn({
            amount: 200.0,
            configs: { cashInConfig },
        });

        expect(result).toEqual('0.06');
    });

    test('should return fee equal to 0 if amount is less than max amount', () => {
        const result = cashIn({
            amount: 4.0,
            configs: { cashInConfig },
        });

        expect(result).toEqual(0);
    });

    test('should return fee equal to 0 if amount is equal to max amount', () => {
        const result = cashIn({
            amount: 5.0,
            configs: { cashInConfig },
        });

        expect(result).toEqual(0);
    });
});
