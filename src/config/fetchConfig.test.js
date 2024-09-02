const axios = require('axios');
const fetchConfig = require('./fetchConfig');

jest.mock('axios');

describe('fetchConfig', () => {
    const baseUrl = 'https://test.com/api';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return data when all requests succeed', async () => {
        const cashInData = { data: 'cash-in-data' };
        const cashOutNaturalData = { data: 'cash-out-natural-data' };
        const cashOutJuridicalData = { data: 'cash-out-juridical-data' };

        axios.get
            .mockResolvedValueOnce(cashInData)
            .mockResolvedValueOnce(cashOutNaturalData)
            .mockResolvedValueOnce(cashOutJuridicalData);

        const result = await fetchConfig({ baseUrl });

        expect(result).toEqual([
            'cash-in-data',
            'cash-out-natural-data',
            'cash-out-juridical-data',
        ]);
    });

    it('should throw an error when a request fails', async () => {
        axios.get.mockRejectedValueOnce(new Error('Network Error'));

        await expect(fetchConfig({ baseUrl })).rejects.toThrow(
            'Failed load configs'
        );
    });
});
