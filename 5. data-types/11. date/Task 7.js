/*
Создайте функцию getSecondsToTomorrow(), возвращающую 
количество секунд до завтрашней даты.
*/

function getSecondsToTomorrow() {
  let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds(),
    totalSecondsInDay = 86400;
  return 86400 - (hours * 60 + minutes) * 60 - seconds;
}

console.log( getSecondsToTomorrow() );