/*
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr.
*/

function unique(arr) {
  let new_arr = [];

  for (let item of arr) {
  	if (!new_arr.includes(item)) new_arr.push(item);
  }
  return new_arr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O