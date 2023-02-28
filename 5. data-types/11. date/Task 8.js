/*
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

  Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
  В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
  В противном случае, если меньше часа, вывести "m мин. назад".
  В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHours = diffMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return (diffSec < 1) ? "прямо сейчас" : 
    (diffMin < 1) ? `${diffSec} сек. назад` :
    (diffHours < 1) ? `${diffMin} мин. назад` :
    `${day}.${month}.${year} ${hours}:${minutes}`;
}