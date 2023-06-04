const awesomeFunction = (req, res, next) => {
    res.json('Kristin Johnson!')
};
const awesomeFunction2 = (req, res, next) => {
    res.json('Kristin yay!')
};

module.exports = { awesomeFunction, awesomeFunction2 };