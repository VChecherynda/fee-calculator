function cashInCommission({ amount, configs, service } = {}) {
    if (!amount || !configs) {
        return;
    }

    if (service && service.cashIn) {
        return service.cashIn({ amount, configs });
    }
}

module.exports = cashInCommission;
