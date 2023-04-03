// Если не требуется, то по умолчанию не нужно указывать тип для примитивов
let numb = 10;
numb = 11;
// numb = 'str' - error


// по дефолту null и undefined будут иметь тип any (если не заданы)
let str = null;
str = 'yo';


let mySymbol = Symbol('key');
let bigInt = BigInt(1234n);