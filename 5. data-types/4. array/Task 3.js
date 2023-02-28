/*
Каков результат? Почему?
*/

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // вызов функции вернет весь массив - [ "a", "b", [Function (anonymous)] ]