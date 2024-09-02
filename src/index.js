const { readInputFile } = require('./helpers/input');
const { printOutput } = require('./helpers/output');
const { fetchConfig } = require('./api');

const cashInCommission = require('./controllers/cash-in-commission');
const cashOutCommission = require('./controllers/cash-out-commission');

const cashInService = require('./services/cash-in');
const cashOutService = require('./services/cash-out');

const { ALLOWED_CURRENCY } = require('./helpers/constants/currency');

async function main(filePath) {
    const transactions = readInputFile(filePath);

    if (!transactions) {
        return;
    }

    const results = [];
    const weeklyUsage = {};

    const [cashInConfig, cashOutNaturalConfig, cashOutJuridicalConfig] =
        await fetchConfig({
            baseUrl: 'https://developers.paysera.com/tasks/api',
        });

    transactions.forEach(
        ({ type, user_id, user_type, date, operation } = {}) => {
            if (!ALLOWED_CURRENCY.includes(operation.currency)) {
                return;
            }

            if (type === 'cash_in') {
                results.push(
                    cashInCommission({
                        amount: operation.amount,
                        configs: {
                            cashInConfig,
                        },
                        service: cashInService,
                    })
                );
            }

            if (type === 'cash_out') {
                results.push(
                    cashOutCommission({
                        amount: operation.amount,
                        configs: {
                            cashOutNaturalConfig,
                            cashOutJuridicalConfig,
                        },
                        service: cashOutService,
                        data: {
                            userType: user_type,
                            userId: user_id,
                            date,
                        },
                        weeklyUsage,
                    })
                );
            }
        }
    );

    printOutput(results);
}

const filePath = process.argv[2] || 'input.json';

if (filePath) {
    main(filePath);
} else {
    console.error('Please provide input file');
}

module.exports = main;
