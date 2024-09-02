const transitionsCashIn = [
    {
        date: '2016-01-05',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_in',
        operation: { amount: 200.0, currency: 'EUR' },
    },
];

const transitionsCashOut = [
    {
        date: '2016-01-06',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: {
            amount: 30000,
            currency: 'EUR',
        },
    },
    {
        date: '2016-01-07',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: {
            amount: 1000.0,
            currency: 'EUR',
        },
    },
    {
        date: '2016-01-07',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: {
            amount: 100.0,
            currency: 'EUR',
        },
    },
    {
        date: '2016-01-07',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: {
            amount: 100.0,
            currency: 'EUR',
        },
    },
];

module.exports = {
    transitionsCashIn,
    transitionsCashOut,
};
