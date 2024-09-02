const { roundUp } = require('./rounding');

describe('rounding', () => {
    test('should not execute if data is not valid', () => {
        expect(roundUp()).toEqual(undefined);

        expect(roundUp('0.034')).toEqual(undefined);
        expect(roundUp(null)).toEqual(undefined);
    });

    test('should proper round number', () => {
        expect(roundUp(0)).toEqual('0.00');
        expect(roundUp(0.345)).toEqual('0.35');
        expect(roundUp(0.023)).toEqual('0.03');
    });
});
