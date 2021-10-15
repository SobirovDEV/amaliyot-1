"use strict";

const a = prompt("x", "");
console.log(a);
// const numberOfNews = +prompt("siz qancha yangilik ko'rdiz?");

// const personalNewDB = {
//   const: numberOfNews,
//   news: {},
//   acters: {},
//   gennrs: [],
//   privet: false,
// };

// const a = prompt("oxiri ko'rgan yangliklarizdan biri"),
//   b = prompt("Unga qanha baxo bergagan bolar edingiz");

// personalNewDB.news[a] = b;

// console.log(personalNewDB);

// let x = 5;
//  the first method
// while (x <= 10) {
//   console.log(x);
//   x++;
// }
// 2 usul
// do {
//   console.log(x);
//   x++;
// } while (x < 10);

// 3 yoli

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// js 14

const obj = +prompt("siz qancha yangilik kordiz");

const practikom = {
  count: obj,
  news: {},
  action: {},
  genser: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("oxirgi korgan yangilliz"),
    b = prompt("unga qancha baho bergan bolardiz ?");
  if (a !== null && b != "" && a != "" && b != null && a.length < 50) {
    practikom.news[a] = b;
    console.log("tayyor");
  } else {
    console.log("ERROR");
    i--;
  }
}

console.log(practikom);
