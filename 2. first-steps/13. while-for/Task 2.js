/*
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выводят alert с одинаковыми значениями или нет?
*/

// Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i );
// Выводятся числа от 1 до 4, потому что префиксный инкремент 
// сначала увеличивает на 1, а после проверяет что i < 5.


// Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert( i ); // 1 2 3 4 5
// Выводятся числа от 1 до 5, потому что префиксный инкремент 
// сначала проверяет что i < 5, а после увеличивает на 1.