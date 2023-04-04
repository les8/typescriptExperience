// Interfaces
interface User {
  readonly id: number,
  name: string;
  age: number;
  hasCar: boolean;
  money?: number;
}

interface UserInfo {
  phone: string,
  address: string,
}

interface Customer extends UserInfo {
  user: User;
  surname: string;
}

const customer: Customer = {
  user: {
    id: 1,
    name: 'Leo',
    age: 28,
    hasCar: true,
    money: 100500,
  },
  surname: 'Skur',
  phone: '+79999999999',
  address: 'street 1, building 1'
}


//Dynamic types
interface FromServer {
  [name: string]: number;
}

const data: FromServer = {
  qwe: 123,
  qweqwe: 123123,
}