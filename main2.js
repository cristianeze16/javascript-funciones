//* Exercise 1: Write a JavaScript function that reverses a number. For example, if x =
//* 32443 then the output should be 34423.
//* Save your JavaScript file and reload the page. Make sure you see the correct output. If
//* not, investigate and fix.

// console.log(reverse(32443));

// function reverse(numero){

//   let numeroAstring = numero.toString();
//   let stringNumero = numeroAstring.split("")
//   let reverseNumero = stringNumero.reverse();
//   let numeroUnido =reverseNumero.join("")
//   return numeroUnido;

// }
//* Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For
//* example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and
//* numbers aren't passed in the string.
//* Save your JavaScript file and reload the page. Make sure you see the correct output. If
//* not, investigate and fix.

//* /^[A-Z]+$/i
//* ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
//* [A-Z] indica que los caracteres admitidos son letras del alfabeto
//* + indica que los caracteres dentro de los corchetes se pueden repetir
//* $ indica que el patrón finaliza con los caracteres que están dentro de los corchetes.
//* i indica que validaremos letras mayúsculas y minúsculas (case-insensitive)

// let letras = "webmaster";

// console.log(ordenarLetras(letras));

// function ordenarLetras(letra) {
//   let resultado = /^[A-Z]+$/i.test(letra);
//   let letraSplit = letra.split("");
//   let letrasAlfa = letraSplit.sort();
//   let letraOrden = letrasAlfa.join("");
//    if (resultado) {

//     return letraOrden;
//    } else alert("Error solo se admiten letras");
// }

//* Exercise 3: Write a JavaScript function that converts the first letter of every word to
//* uppercase. For example, if x = "prince of persia" then the output should be "Prince Of
//* Persia".
//* Save your JavaScript file and reload the page. Make sure you see the correct output. If
//* not, investigate and fix

// console.log(cambiarAmayus("prince of persia"));

// function cambiarAmayus(frase) {
//   fraseSeparada = frase.split(" ");
//   primerPalabraMayus = fraseSeparada[0].toUpperCase();

//   for (let i = 1; i < fraseSeparada.length; i++) {
//     primerPalabraMayus +=" " +fraseSeparada[i];
//   }
//   return primerPalabraMayus;
// }


// * Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For 
// * example, if x = "Web Development Tutorial", then the output should be 
// * "Development".
// * Save your JavaScript file and reload the page. Make sure you see the correct output. If 
// * not, investigate and fix



// function longestWordInPhrase(phrase) {
