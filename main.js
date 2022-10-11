// console.log(beers)

//* 2) Generar una funcion que reciba como parametro el array de cervezas y
//* un valor de alcohol (numero). La funcion debe devolver un nuevo array con
//* las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array
//* debe ser un objeto que tenga sólo las propiedades name, (alcohol) abv y ("amargor") ibu
//* para las 12:15 tiramos ruleta a ver hasta donde llegaron

// let ibuenNumero = Number(prompt("Ingrese el valor de alcohol ibu"));
// beerIbu(beers,ibuEnNumero);

// function beerIbu(beer) {
//   let excededAbv = [];

//   for (let cerveza of beer) {
//     if (cerveza.ibu > 30) {

//       excededAbv.push(cerveza);

//     }

//   }
//   console.log(excededAbv);
// }

//* 3) Generar una función que reciba como parámetro un array de cervezas
//* y devuelva un nuevo array con las 10 cervezas más alcohólicas

// // beer(beers);
// let lasDiez = beer(beers);

// console.log(lasDiez)


// function beer(beer) {
//   let mayorAlcohol = [];
//   let lasDiez = [];

//   for (let cerveza of beer) {
//     if (cerveza.abv > 5) {
//       mayorAlcohol.push(cerveza);
//     }
//   }
  
//   for( let i= 0; i <10; i++) {
//     lasDiez.push(mayorAlcohol[i]);
    
//   }
//  return lasDiez;

// }

//* 4) Generar una función que reciba como parámetro un array
//* de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas

let lasDiez = beer(beers);

console.log(lasDiez);

function beer(beer) {
  let mayorAlcohol = [];
  let lasDiez = [];

  for (let cerveza of beer) {
    if (cerveza.ibu < 50) {
      mayorAlcohol.push(cerveza);
    }
  }

  for (let i = 0; i < 10; i++) {
    lasDiez.push(mayorAlcohol[i]);
  }
  return lasDiez;
}


// 5) Generar una función que reciba como parámetro un array de cervezas
// un nombre de propiedad y un valor booleano. Debe devolver un nuevo array
// con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento
// de manera ascendente si el tercero es true o descendente si es false