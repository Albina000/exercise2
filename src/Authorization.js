class Authorization {
    getToken(str) {
        return str.slice(7);
    }
}

module.exports = { Authorization };