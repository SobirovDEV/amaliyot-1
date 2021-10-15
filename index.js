"use strict";

let numberOfNews;

function startProject() {
  numberOfNews = +prompt("siz qancha yangilik kordiz");

  while (numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
    numberOfNews = +prompt("siz qancha yangilik kordiz");
  }
}
startProject();

const practikom = {
  count: numberOfNews,
  news: {},
  action: {},
  genser: [],
  privat: false,
};
function rememberNews() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("oxirgi korgan yangilliz"),
      b = prompt("unga qancha baho bergan bolardiz ?");
    if (a !== null && b != "" && a != "" && b != null && a.length < 50) {
      practikom.news[a] = b;
      console.log("tayyor");
    } else {
      console.log("Error");
      i--;
    }
  }
}

function showPesonalLevel() {
  if (practikom.count < 10) {
    console.log("juda oz sonli yangiliklar oqilibdi");
  } else if (practikom.count < 30) {
    console.log("siz ortacha yangiliklarni oqibsz");
  } else if (practikom) {
    console.log("siz alo darajad oqibsz");
  } else {
    console.log("xato yuz berdi");
  }
}
showPesonalLevel();
rememberNews();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(practikom);
  }
}

showMyDb(practikom.privat);
function writeYourGenrres() {
  for (let i = 1; i <= 3; i++) {
    practikom.genser[i - 1] = prompt("sizning sevimli junoringiz nomeri ${i}");
  }
}
writeYourGenrres();
