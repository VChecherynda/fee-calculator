function printOutput(results) {
    if (!Array.isArray(results)) {
        return;
    }

    results.map((arg) => {
        console.log(arg);
    });
}

module.exports = printOutput;
