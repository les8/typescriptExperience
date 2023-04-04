// Literal types - нужны для какого-то краткого единоразового использования, в остальном лучше type
let Env: 'development' | 'staging' | 'production' = 'development';

// есть проблема при их использовании:
function setEnv(myenv: 'development' | 'staging' | 'production'): 'development' | 'staging' | 'production' {
  // логика ...
  return myenv;
}


//Types
type env = 'development' | 'staging' | 'production';

let env1: env = 'staging';

function setEnv2(myenv: env): env {
  // логика ...
  return myenv;
}


//Enums - нужно если есть необходимость использовать именно как объект
const enum Env3 {
  Development = 'development',
  Staging = 'staging',
  Production = 'production',
}

let myEnvir = Env3.Development;

function withEnum(arg: Env3): Env3 {
  return arg
}