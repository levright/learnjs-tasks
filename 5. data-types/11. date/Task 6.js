/*
Напишите функцию getSecondsToday(), возвращающую количество 
секунд с начала сегодняшнего дня.
*/

function getSecondsToday() {
  let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();
  return (hours * 60 + minutes) * 60 + seconds;
}

console.log( getSecondsToday() );