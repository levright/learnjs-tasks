/*
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, 
если ничего не введено или нажата клавиша Esc – показать «Отменено», 
в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
    Иначе – «Неверный пароль»,
    При отмене – «Отменено».
*/

let login = prompt("Кто там?", "");

if (login === "Админ") {

  let passwd = prompt("Пароль?", "");

  if (passwd === "Я Главный") {
    alert("Здравствуйте!");
  } else if (passwd === "" || passwd === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }

} else if (login === "" || login === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}