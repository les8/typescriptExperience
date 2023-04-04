// Any
let everything: any = 123;
everything = '123';
everything.map();


// Unknown (например когда не понятно, что придет с сервера)
let incognito: unknown = 123;
// incognito.map(); error


// Void
function f(arg: string): void {
  console.log(arg);
  // return 123; error void не может ничего возвращать
}

f('string in void function');

function square(num: number): number {
  return num*2
}