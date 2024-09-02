const { getWeekKey } = require('./date-utils');

describe("getWeekKey", () => {
    test("should stop execution if date is not is string or not valid", () => {
        expect(getWeekKey()).toEqual(undefined);
        expect(getWeekKey(null)).toEqual(undefined);
        expect(getWeekKey('abcd')).toEqual(undefined);
    });

    test("should return week number", () => {
        expect(getWeekKey('2016-01-07')).toEqual(2);
        expect(getWeekKey('2016-01-10')).toEqual(3);
    });
});