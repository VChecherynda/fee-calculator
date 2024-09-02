const cashInConfig = {
    percents: 0.03,
    max: {
        amount: 5,
        currency: 'EUR',
    },
};

const cashOutNaturalConfig = {
    percents: 0.3,
    week_limit: { amount: 1000, currency: 'EUR' },
};

const cashOutJuridicalConfig = {
    percents: 0.3,
    min: {
        amount: 0.5,
        currency: 'EUR',
    },
};

module.exports = { cashInConfig, cashOutNaturalConfig, cashOutJuridicalConfig };
