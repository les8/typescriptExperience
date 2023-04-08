interface IClassUser {
  name: string,
  surname: string
}

interface IClassCustomer extends IClassUser {
  bill: number
}

class ClassUser implements IClassUser { // Чтобы не ругался если что-то забыли из интерфейса?
  public name: string; // public - значение свойств и методов по умолчанию (можно не писать)
  surname!: string; // ! - свойство которое не обязательно инициализировать
  private secretCode: string = 'cat'; // private - может использоваться только внутри текущего класса
  protected cvvCode: string = '345' // protected - может использоваться внутри текущего класса и расширяемых

  constructor(props: IClassUser) {
    this.name = props.name;
    this.surname = props?.surname;
  }

  printFullName(): void {
    console.log(`${this.name} ${this.surname}`);
  }

  printSecretCode(password: number): string | undefined | null {
    if (password === 1234) {
      return this.secretCode;
    } else return 'Invalid password';
  }
}

class ClassCustomer extends ClassUser {
  bill: number;

  constructor(props: IClassCustomer) {
    super({
      name: props.name,
      surname: props.surname,
    });

    this.bill = props.bill;
  }

  getCVV() {
    return this.cvvCode;
  }
}

const human = new ClassUser({ name: 'Vasya', surname: 'Pupkin' });
const superCustomer = new ClassCustomer({ name: 'Йося', surname: 'Сахаров', bill: 1234 });

human.printFullName();
console.log(human.printSecretCode(11234));
console.log(human.printSecretCode(1234));

console.log(human.name);

console.log(superCustomer.getCVV());

