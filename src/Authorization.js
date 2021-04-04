class Authorization {
   
    getToken(str) {
        if (str === '') {
            return null;
        }
        if (str.length < 17) {
            throw new Error("Токен меньше 10 символов"); 
        }
        return str.slice(7);
    }
}

module.exports = { Authorization };