/*
Напишите функцию getWeekDay(date), показывающую день недели 
в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/

function getWeekDay(date) {
  let week = ["ВС", "ПН",  "ВТ",  "СР",  "ЧТ",  "ПТ",  "СБ"];
  return week[date.getDay()];
}

let date = new Date(2012, 0, 3);

console.log(getWeekDay(date));