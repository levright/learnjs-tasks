/*
Замените код Function Expression стрелочной функцией:
*/

function ask(question, yes, no) {
  (confirm(question)) ? yes() : no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);