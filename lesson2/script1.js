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