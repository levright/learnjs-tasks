/*
Напишите функцию sumInput(), которая:

  Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
  Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
  Подсчитывает и возвращает сумму элементов массива.

Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
	let arrNumbers = [];

	while (true) {
		let num = prompt("Введите число", "");

		if (num === null || num === "" || !isFinite(num)) break;

		arrNumbers.push(+num);
	}

	let sum = 0;

	while (arrNumbers.length) {
		sum += arrNumbers.shift();
	}

	return sum;
}