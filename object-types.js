var user = {
    name: 'Leo',
    height: 188,
    profession: 'developer',
};
user.name = 'Leonid';
// user.height = '123' error
delete user.profession; // была бы ошибка, если бы небыло опциональным свойством
console.log(user.name, user.height);
console.log(user.profession);
