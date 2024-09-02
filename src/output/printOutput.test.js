const printOutput = require('./printOutput');

describe('printOutput', () => {
    test('should not execute if data is not valid', () => {
        expect(printOutput()).toEqual(undefined);
        expect(printOutput(null)).toEqual(undefined);
        expect(printOutput(123)).toEqual(undefined);
        expect(printOutput('test')).toEqual(undefined);
    });

    test('should output data to the console', () => {
        console.log = jest.fn();

        printOutput(['0.00', '0.30', '87.00']);

        expect(console.log).toHaveBeenCalledWith('0.00');
        expect(console.log).toHaveBeenCalledWith('0.30');
        expect(console.log).toHaveBeenCalledWith('87.00');
    });
});
