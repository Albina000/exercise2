const {Authorization} = require('../src/Authorization.js');
 
test ('Правильный токен', () => {
    //Arrange
    let auth = new Authorization();

    const inputString = 'Bearer vCVVCHjTylu2lMtEf5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF';
    const expectedToken = 'vCVVCHjTylu2lMtEf5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF';

    //Act
    const token = auth.getToken(inputString);

    //Assert
    expect(token).toBe(expectedToken);

});


test ('Пустая строка', () => {
    //Arrange
    let auth = new Authorization();

    const inputString = '';
    
    //Act
    const token = auth.getToken(inputString);

    //Assert
    expect(token).toBeNull();

});


test ('Длина токена меньше 10 символов', () => {
    //Arrange
    let auth = new Authorization();

    const inputString = 'Bearer vCVVCHjTy';
   
    //Act
   
    //Assert
    expect(() => auth.getToken(inputString)).toThrow('Токен меньше 10 символов');


});


test ('Токен содержит недопустимые символы', () => {
    //Arrange
    let auth = new Authorization();

    const inputString = 'Bearer $CVVCHjTylu2lMtEf5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF';
       
    //Act
       
    //Assert
    expect(() => auth.getToken(inputString)).toThrow('Недопустимый символ');

});