function cashOutCommission({
    amount,
    configs: { cashOutJuridicalConfig, cashOutNaturalConfig } = {},
    service,
    weeklyUsage,
    data,
} = {}) {
    if (!amount || !data) {
        return;
    }

    if (
        data.userType === 'juridical' &&
        cashOutJuridicalConfig &&
        service.cashOutForLegal
    ) {
        return service.cashOutForLegal({
            amount,
            config: cashOutJuridicalConfig,
        });
    }

    if (
        data.userType === 'natural' &&
        cashOutNaturalConfig &&
        service.cashOutForNatural
    ) {
        return service.cashOutForNatural({
            amount,
            config: cashOutNaturalConfig,
            data,
            weeklyUsage,
        });
    }
}

module.exports = cashOutCommission;
