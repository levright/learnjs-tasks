/*
Напишите функцию aclean(arr), которая возвращает массив слов, 
очищенный от анаграмм.
*/

function aclean(arr) {
  let map = new Map();

  for (let item of arr) {
    let sorted = item.toLowerCase().split("").sort().join("");
    map.set(sorted, item);
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );