function generatePassword(){
    let name = document.getElementById('name').value;
    const length = 12;
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+';
    let password = '';
    let finalOutput = "";
    password = password + name;
    password = password + upperCase[Math.floor(Math.random( ) * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random( ) * lowerCase.length)];
    password = password + numbers[Math.floor(Math.random( ) * numbers.length)];
    password = password  + symbols[Math.floor(Math.random( ) * symbols.length)];
    const allCharacters = name +upperCase + lowerCase + numbers + symbols;
    for(let i = length ; i< length ; i++){
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password =  password + allCharacters[randomIndex];
       
    }

   document.getElementById('password').innerText =password;
}