class Authorization {
   
    getToken(str) {
        if (str === '') {
            return null;
        }
        return str.slice(7);
    }
}

module.exports = { Authorization };