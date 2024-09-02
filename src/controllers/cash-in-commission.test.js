const cashInCommission = require('./cash-in-commission');

describe('cashInCommission', () => {
    test('should not execute if params is not valid', () => {
        expect(cashInCommission()).toEqual(undefined);
        expect(cashInCommission(100)).toEqual(undefined);
        expect(cashInCommission(123, {}, {})).toEqual(undefined);
    });

    test('should execute cashIn func if params is valid', () => {
        const configs = {
            max: {
                amount: 1000,
            },
        };

        const service = {
            cashIn: jest.fn(),
        };

        cashInCommission({ amount: 100, configs, service });

        expect(service.cashIn).toBeCalledWith({
            amount: 100,
            configs: { max: { amount: 1000 } },
        });
    });
});
