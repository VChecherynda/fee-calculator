const { convertToCents, convertToEur } = require('./convertors');

describe("convertToCents", () => {
    test("should stop execution if EUR is not number", () => {
        expect(convertToCents()).toEqual(undefined);
        expect(convertToCents('100.01')).toEqual(undefined);
        expect(convertToCents(null)).toEqual(undefined);

    });

    test("should proper convert EUR to cents", () => {
        expect(convertToCents(100.01)).toEqual(10001);
    });
});

describe("convertToEur", () => {
    test("should stop execution if cents is not number", () => {
        expect(convertToEur()).toEqual(undefined);
        expect(convertToEur('100.01')).toEqual(undefined);
        expect(convertToEur(null)).toEqual(undefined);

    });

    test("should proper convert cents to EUR", () => {
        expect(convertToEur(10001)).toEqual(100.01);
    });
});