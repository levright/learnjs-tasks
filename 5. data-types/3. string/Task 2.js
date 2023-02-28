/*
Напишите функцию checkSpam(str), возвращающую true, 
если str содержит 'viagra' или 'XXX', а иначе false.
*/

function checkSpam(str) {
	return str.toLowerCase().includes("viagra") || 
		str.toLowerCase().includes("xxx");
}