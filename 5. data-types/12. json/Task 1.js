/*
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
*/

let user = {
  name: "Василий Иванович",
  age: 35
};

let jsonFromUser = JSON.stringify(user);

let userFromJson = JSON.parse(jsonFromUser);