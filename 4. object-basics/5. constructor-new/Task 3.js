/*
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

  Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
  Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
*/

function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function() {
		this.value += +prompt("Введите число", 0)
	}
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений