/*
Напишите функцию isEmpty(obj), которая возвращает true, 
если у объекта нет свойств, иначе false.
*/

function isEmpty(arg) {
  for (key in arg) return false;
  return true;
}