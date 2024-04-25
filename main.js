// import { soma, sub, PI } from "./lib/math";
// import soma from './lib/sum'
// import * as math from './lib/math';
// import { soma as sum } from './lib/math';

import { soma } from "./lib/sum";

console.log(soma(1, 2));

/* // Nullish Coalecing Operator

const idadeTeste =  0;

// 0, '', [], false, undefined, null => falsy = ||
// null, undefined => ??

document.body.innerText = 'Sua idade é: ' + (idadeTeste ?? 'Não informado');

// Objetos

const user = {
  name: 'Diego',
  nickname: 'Schell',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
};

// Desestruturação

function mostraIdade({ idade }) {
  return idade
}

// Rest operator

// const { name, ...rest } = user;

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* const first = arrays[0];
const second = arrays[1];

const [first, , third, ...rest] = array; */

// Short Syntax

/* const name = 'Diego';
const age = 27;

const user = {
  name,
  age,
} */

// Optional Chaining

/* const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
    zip: {
      code: '89160000',
      city: 'Rio do Sul',
    },
    showFullAddress() {
      return 'Ok'
    }
  },
};

const key = 'name';
 */

// Métodos de array

// const array = [1, 2, 3, 4, 5];

/* for (const i of array) {
  document.body.innerText += i
} */

/* array.forEach(item => {
  document.body.innerText += item;
}) */

/* array.forEach(item => {
  novoArray.push(item * 2)
}) */

/* const novoArray = array.map(item => {
  if (item % 2 == 0) {
    return item * 10;
  }
  
  return item;

}) */

// map, filter, every, some, find, findIndex, reduce

/* const novoArray = array
  .filter(item => item % 2 !== 0)
  .map(item => item * 10) */

/* const todosItensSaoNumeros = array.every(item => {
  return typeof item == 'number';
}); */

/* const peloMenosUmItemNaoEUmNumero = array.some(item => {
  return typeof item !== 'number';
}) */

// const par = array.findIndex(item => item % 2 == 0);

/* const soma = array.reduce((acc, item) => {
  document.body.innerText += acc + ',' + item + ' ---- '
  return acc + item;
}, 0) */

// Template Literals

/* const name = null;
const message = `Bem-vindo, ${name ? name: 'visitante'}`; */

// Promises

// .then/ .catch

/* const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(a + b);
    }, 2000);
  });
} */
/* async function buscaDadosNoGihub() {
  try {
    const response = await fetch('https:api.github.com/users/diego3g');
    const body = await response.json();
  
    return body.name;
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Finalizou');
  }
 */


  /* fetch('https://api.github.com/users/diego3g')
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body);
  })
 .then(response => {
    response.json().then(body => {
      console.log(body);
    })
  })

  .catch(err => {
    console.log(err);
  })
  .finally(() => {
     console.log('Finalizou');
  })
}

/* buscaDadosNoGihub().then(name=> {
  console.log(name);
}) */

/* somaDoisNumeros(1, 3)
  .then(soma => {
    document.body.innerText = soma
  })
  .catch(err => {
      console.log(err);
    }) */

// document.body.innerText = message