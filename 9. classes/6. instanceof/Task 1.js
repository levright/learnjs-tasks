/*
Почему instanceof в примере ниже возвращает true? Мы же видим, 
что a не создан с помощью B().
*/

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

// Дело в том что instanceof сравнивает __proto__ объекта и prototype класса, 
// после того как prototype обоих функций присвоен пустой объект {},
// следовательно a.__proto__ == B.prototype возвращает trueю