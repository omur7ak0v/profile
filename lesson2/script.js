// 1-Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'
const suroo1 = 'Дана строка "ddd@bbb@ccc". Замените все "@" на "!"';
const original_text1 = 'ddd@bbb@ccc';
const mo1 = 'aaa@bbb@ccc';

// Экранга чыгаруу
document.writeln('<b>1 - Суроо: ', suroo1, '</b> <br>');
document.writeln('<b>Оригинал текст: ', original_text1, '</b> <br>');
document.writeln('<b>Результат: ' + mo1.replace(/@/g, '!') + '</b><br>');
// Консольго чыгаруу
console.log(mo1.replace(/@/g, '!'));



// 2-Дана строка js Сделайте из нее строку JS
const suroo2 = 'Дана строка js Сделайте из нее строку JS';
const original_text2 = 'js';
const mo2 = 'js';

// Экранга чыгаруу
document.writeln('<br>');
document.writeln('<b>2 - Суроо: ', suroo2, '</b> <br>');
document.writeln('<b>Оригинал текст: ', original_text2, '</b> <br>');
document.writeln('<b>Результат: ' + mo2.toUpperCase() + '</b>');
// Консольго чыгаруу
console.log(mo2.toUpperCase());



// 3-Дана строка JS Сделайте из нее строку js
const suroo3 = 'Дана строка JS Сделайте из нее строку js';
const original_text3 = 'JS';
const mo3 = 'js';

// Экранга чыгаруу
document.writeln('<br>');
document.writeln('<br>');
document.writeln('<b>3 - Суроо: ', suroo3, '</b> <br>');
document.writeln('<b>Оригинал текст: ', original_text3, '</b> <br>');
document.writeln('<b>Результат: ' + mo3.toLowerCase() + '</b>');
// Консольго чыгаруу
console.log(mo3.toLowerCase());



// 4-Дана строка'I am a hero!'. Выведите в консоль количество символов в этой строке.
const suroo4 = 'Дана строка "I am a hero!". Выведите в консоль количество символов в этой строке.';
const original_text4 = 'I am a hero!';
const mo4 = 'I am a hero!';

// Экранга чыгаруу
document.writeln('<br>');
document.writeln('<br>');
document.writeln('<b>4 - Суроо: ', suroo4, '</b> <br>');
document.writeln('<b>Оригинал текст: ', original_text4, '</b> <br>');
document.writeln('<b>Результат: ' + mo4.length + '</b>');
// Консольго чыгаруу
console.log(mo4.length);


// 5-Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
// **Пример: "Номер вашей карты: **********1245"**

const suroo5 = 'Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.<br> Пример: "Номер вашей карты: **********1245"';
const mo5 = prompt('Введите номер кредитной карты?');

let message_mo = `<b>Номер вашей карты - ${mo5.slice(0, 0).concat("************")}${mo5.slice(12, 16)}</b>`;

// Экранга чыгаруу
document.writeln('<br>');
document.writeln('<br>');
document.writeln('<b>4 - Суроо: ', suroo5, '</b> <br>');
document.writeln('<b>Результат: ' + message_mo + '</b>');

// Консольго чыгаруу
console.log(`Результат: Номер вашей карты - ${mo5.slice(0, 0).concat("************")}${mo5.slice(12, 16)}`);

// const mo = prompt('Введите номер кредитной карты?');

// Экранга чыгаруу
// let message_mo = `<h1><b>Номер вашей карты - ${mo.slice(0, 0).concat("************")}${mo.slice(12, 16)}</b></h1>`;
// document.writeln(message_mo);
// Консольго чыгаруу
// console.log(`Номер вашей карты - ${mo.slice(0, 0).concat("************")}${mo.slice(12, 16)}`);