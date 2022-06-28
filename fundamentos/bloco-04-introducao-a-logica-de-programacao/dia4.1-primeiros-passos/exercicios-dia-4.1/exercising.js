/*Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas constantes, a e b, definidas no começo com 
os valores que serão operados. Faça programas para:*/

let a = 10;
let b = 5;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao, subtracao, multiplicacao, divisao, modulo);

/*Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas constantes com os valores que serão comparados.*/

const c = 8;
const d = 6;

if (c > d) {
  console.log(c);
} else {
  console.log(d);
}

/*Faça um programa que retorne o maior de três números. 
Defina no começo do programa três constantes com os valores que serão comparados.*/

const e = 5;
const f = 7;
const g = 4;

if (e > f && e > g) {
  console.log("e =", e);
} else if (f > e && f > g) {
  console.log("f =", f);
} else if (g > e && g > f) {
  console.log("g =", g);
}

/*Faça um programa que, dado um valor definido numa constante, 
retorne "positive" se esse valor for positivo, 
"negative" se for negativo e "zero" caso contrário.*/

const isPositiv = 0;

if (isPositiv > 0) {
  console.log(isPositiv, "É positivo");
} else {
  console.log(isPositiv, "É negativo ou zero");
}

/* 🚀 Faça um programa que defina três constantes com os valores dos três ângulos
internos de um triângulo. Retorne true se os ângulos representarem os ângulos 
de um triângulo e false, caso contrário.
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

const ang1 = 90;
const ang2 = 40;
const ang3 = 45;

let tringulo = null;

if(ang1 >= 0 && ang2 >= 0 && ang3 >= 0){
    if(ang1 + ang2 + ang3 == 180){
        console.log("é um retangulo")
        tringulo = true;
    }else{
        console.log("não é um retangulo")
        tringulo = false;
    }
}else{
    console.log("alguns dos angulos é negativo")
}
console.log(tringulo);

