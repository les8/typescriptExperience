const user: {
  name: string,
  height: number,
  age?: number, // необязательное свойство (нет ошибки, когда не присвоено)
  profession?: string, // необязательное свойство (нет ошибки, когда не присвоено)
} = {
  name: 'Leo',
  height: 188,
  profession: 'developer',
}

user.name = 'Leonid';
// user.height = '123' error

delete user.profession // была бы ошибка, если бы небыло опциональным свойством

console.log(user.name, user.height);
console.log(user.profession);

