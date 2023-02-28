/*
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выведут alert с одинаковыми значениями или нет?
*/

// Постфиксная форма:
for (let i = 0; i < 5; i++) alert( i );

// Префиксная форма:
for (let i = 0; i < 5; ++i) alert( i );

// Оба цикла выведут значения от 1 до 4, потому что инкремент в обоих случаях
// происходит после шага цикла не играет роли префиксная или постфиксная форма.