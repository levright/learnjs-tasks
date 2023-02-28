/*
Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, 
т.е. целые от 1 и выше.
*/

function pow(x, n) {
  if (n < 1) return alert("Степень ${n} должна быть натуральным числом");

  let result = x;

  for (let i = 0; i < n.length; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

pow(x, n);