const cashOutCommission = require('./cash-out-commission');

describe('cashOutCommission', () => {
    test('should not execute if params is not valid', () => {
        expect(cashOutCommission()).toEqual(undefined);
        expect(cashOutCommission(100)).toEqual(undefined);
        expect(cashOutCommission(123, {}, {}, {}, {})).toEqual(undefined);
    });

    test('should execute cashOutForLegal func if params is valid', () => {
        const configs = {
            cashOutJuridicalConfig: {
                percents: 0.3,
                min: {
                    amount: 0.5,
                },
            },
        };

        const service = {
            cashOutForLegal: jest.fn(),
        };

        const data = {
            userId: '1',
            userType: 'juridical',
        };

        cashOutCommission({
            amount: 100,
            configs,
            service,
            weeklyUsage: {},
            data,
        });

        expect(service.cashOutForLegal).toHaveBeenCalledWith({
            amount: 100,
            config: { min: { amount: 0.5 }, percents: 0.3 },
        });
    });

    test('should execute cashOutForNatural func if params is valid', () => {
        const configs = {
            cashOutNaturalConfig: {
                percents: 0.3,
                week_limit: {
                    amount: 1000,
                },
            },
        };

        const service = {
            cashOutForNatural: jest.fn(),
        };

        const data = {
            userId: '1',
            userType: 'natural',
        };

        cashOutCommission({
            amount: 100,
            configs,
            service,
            weeklyUsage: {},
            data,
        });

        expect(service.cashOutForNatural).toHaveBeenCalledWith({
            amount: 100,
            config: { percents: 0.3, week_limit: { amount: 1000 } },
            data: { userId: '1', userType: 'natural' },
            weeklyUsage: {},
        });
    });
});
