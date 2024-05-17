"use strict";
// 1 - Arrays
let numbers = [1, 2, 3];
console.log(numbers[2]);
const names = ["igor"];
// 2 - Outra sintaxe array
const nums = [1, 2];
console.log(nums);
// 3 - Any
const arr1 = [1, "tseq", 3];
console.log(arr1);
// 4 - Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(3, 6);
// 5 - Retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
// 6 - Função anonimas
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
    console.log(sallary);
}, 2000);
