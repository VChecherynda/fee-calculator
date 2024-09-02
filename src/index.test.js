const { readInputFile } = require('./helpers/input');
const { printOutput } = require('./helpers/output');
const { fetchConfig } = require('./api');

const cashInCommission = require('./controllers/cash-in-commission');
const cashOutCommission = require('./controllers/cash-out-commission');

const main = require('./index');

const {
    cashInConfig,
    cashOutNaturalConfig,
    cashOutJuridicalConfig,
    transitionsCashIn,
    transitionsCashOut,
} = require('./mocks');

jest.mock('./api');
jest.mock('./helpers/input');
jest.mock('./helpers/output');
jest.mock('./controllers/cash-in-commission');
jest.mock('./controllers/cash-out-commission');
jest.mock('./services/cash-in');
jest.mock('./services/cash-out');

describe('main function tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should process cash in transactions correctly', async () => {
        readInputFile.mockReturnValue(transitionsCashIn);
        fetchConfig.mockResolvedValue([
            cashInConfig,
            cashOutNaturalConfig,
            cashOutJuridicalConfig,
        ]);
        cashInCommission.mockReturnValue('0.06');

        await main('dummyFilePath');

        expect(cashInCommission).toHaveBeenCalled();
        expect(printOutput).toHaveBeenCalledWith(['0.06']);
    });

    test('should process cash out transactions correctly', async () => {
        readInputFile.mockReturnValue([transitionsCashOut[0]]);
        fetchConfig.mockResolvedValue([
            cashInConfig,
            cashOutNaturalConfig,
            cashOutJuridicalConfig,
        ]);
        cashOutCommission.mockReturnValue('0.60');

        await main('dummyFilePath');

        expect(cashOutCommission).toHaveBeenCalled();
        expect(printOutput).toHaveBeenCalledWith(['0.60']);
    });

    test('should not process transactions with unsupported currency', async () => {
        readInputFile.mockReturnValue([
            {
                ...transitionsCashIn,
                operation: {
                    amount: 200.0,
                    currency: 'USD',
                },
            },
        ]);

        await main('dummyFilePath');

        expect(cashInCommission).not.toHaveBeenCalled();
        expect(cashOutCommission).not.toHaveBeenCalled();

        expect(printOutput).toHaveBeenCalledWith([]);
    });
});
