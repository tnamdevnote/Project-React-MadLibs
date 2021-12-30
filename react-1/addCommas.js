const addCommas = (num) => {
    const stringNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return stringNum
}
module.exports = addCommas;