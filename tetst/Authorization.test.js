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