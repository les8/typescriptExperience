// Массив чисел
var arr = [];
arr.push(1);
// arr.push('123'); error
// Массив объектов
/*
const matrix: object[] = [];
import { user } from "./object-types";
matrix.push(user);
console.log(matrix);
*/
//Typles
var coord = [58.603595, '49.668023']; // больше 2 значений - ошибка
coord.push(123); // нет ошибки при добавлении :)
coord.push('123'); // нет ошибки при добавлении :)
// coord.push(true); тут ошибка ито хорошо :)
console.log(coord);
var coord2 = ['1']; // более 1 значения ошибка...
