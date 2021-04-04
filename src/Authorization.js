class Authorization {
   
    getToken(str) {
        if (str === '') {
            return null;
        }
        if (str.length < 17) {
            throw new Error("Токен меньше 10 символов"); 
        }
        const token = str.slice(7);
        if(token.search(/^[A-Za-z0-9]+$/) === -1){
            throw new Error("Недопустимый символ"); 
        }
        return token;
    
    }
}

module.exports = { Authorization };