const { convertPercents } = require('./percent');

describe('convertPercents', () => {
    test('should not execute if data is not valid', () => {
        expect(convertPercents()).toEqual(undefined);

        expect(convertPercents(undefined, 0.3)).toEqual(undefined);
        expect(convertPercents(null, 0.3)).toEqual(undefined);
        expect(convertPercents('9', 0.3)).toEqual(undefined);

        expect(convertPercents(100)).toEqual(undefined);
        expect(convertPercents(100, null)).toEqual(undefined);
        expect(convertPercents(100, '0.3')).toEqual(undefined);
    });

    test('should return percent from amount', () => {
        expect(convertPercents(100, 0.3)).toEqual(0.3);
        expect(convertPercents(200, 0.3)).toEqual(0.6);
    });
});
