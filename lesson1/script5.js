// 5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
//     - сумма a и b; 
//     - разница между a и b;
//     - произведение a и b; 
//     - частное от деления a на b; 
//     - остаток от деления a на b;  
//     - результат возведения числа a в степень b


let addA = +prompt('Введите целое число A');
let addB = +prompt('Введите целое число B');

function1 = addA + addB;
function2 = addA - addB;
function3 = addA * addB;
function4 = addA / addB;
function5 = addA % addB;
function6 = addA ** addB;

let message1 = '<h2>Вы ввели число ' + addA + ' и ' + addB + ' = A(' + addA + '), B(' + addB + ') </h2>';
let text1 = '<h3>  <b> Сумма ' + addA + ' и ' + addB + ' = ' + function1 + ' </b> </h3>';
let text2 = '<h3>  <b> Разница между ' + addA + ' и ' + addB + ' = ' + function2 + ' </b>  </h3>';
let text3 = '<h3>  <b> Произведение ' + addA + ' и ' + addB + ' = ' + function3 + ' </b>  </h3>';
let text4 = '<h3>  <b> Частное от деления ' + addA + ' и ' + addB + ' = ' + function4 + ' </b>  </h3>';
let text5 = '<h3>  <b> Остаток от деления ' + addA + ' и ' + addB + ' = ' + function5 + ' </b>  </h3>';
let text6 = '<h3> <b> Результат возведения числа ' + addA + ' в степень ' + addB + ' = ' + function6 + '  </b> </h3>';

document.writeln(message1);
document.writeln(text1);
document.writeln(text2);
document.writeln(text3);
document.writeln(text4);
document.writeln(text5);
document.writeln(text6);