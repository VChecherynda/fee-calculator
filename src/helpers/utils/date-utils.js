const { isValid, parse, getWeek } = require('date-fns')

function getWeekKey(dateStr) {
    if(!dateStr) {
        return;
    }

    const parsedDate = parse(dateStr, 'yyyy-MM-dd', new Date());
    const isValidDate = isValid(parsedDate);

    if (!isValidDate) {
        return;
    }

    return getWeek(new Date(dateStr));
}

module.exports = {
    getWeekKey
}