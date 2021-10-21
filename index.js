"use strict";

const personalNewDB = {
  count: 0,
  news: {},
  action: {},
  genser: [],
  privat: false,
  startProject: function () {
    personalNewDB.count = +prompt("siz qancha yangilik kordiz");

    while (
      personalNewDB.count == "" ||
      personalNewDB.count == null ||
      isNaN(personalNewDB.count)
    ) {
      personalNewDB.count = +prompt("siz qancha yangilik kordiz");
    }
  },
  rememberNews: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("oxirgi korgan yangilliz"),
        b = prompt("unga qancha baho bergan bolardiz ?");
      if (a !== null && b != "" && a != "" && b != null && a.length < 50) {
        personalNewDB.news[a] = b;
        console.log("tayyor");
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  showPesonalLevel: function () {
    if (personalNewDB.count < 10) {
      console.log("juda oz sonli yangiliklar oqilibdi");
    } else if (personalNewDB.count < 30) {
      console.log("siz ortacha yangiliklarni oqibsz");
    } else if (personalNewDB) {
      console.log("siz alo darajad oqibsz");
    } else {
      console.log("xato yuz berdi");
    }
  },
  showMyDb: function (hidden) {
    if (!hidden) {
      console.log(personalNewDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalNewDB.privat) {
      personalNewDB.privat = false;
    } else {
      personalNewDB.privat = true;
    }
  },
  writeYourGenrres: function () {
    // for (let i = 0; i < 2; i++) {
    //   let genre = prompt(`Sizning sevimli janoringiz : nomer${i}`);
    //   if (genre === "" || null) {
    //     console.log("siz notog'ri malumot kiritingiz");
    //     i--;
    //   } else {
    //     personalNewDB.genser[i - 1] = genre;
    //   }
    // }
    for (let i = 0; i < 2; i++) {
      let genre = prompt(
        `Sizning sevimli janoringiz , vergul yodamida yozing`
      ).toLowerCase();

      if (genre === "" || genre === null) {
        console.log(`siz notog'ri malumot kiritingiz`);
        i--;
      } else {
        personalNewDB.genser = genre.split(", ");
        personalNewDB.genser.sort();
      }
    }

    personalNewDB.genser.forEach((item, i) => {
      console.log(`sizning sevimli janoringiz: nomer ${i} bu ${item}`);
    });
  },
};
personalNewDB.writeYourGenrres();
personalNewDB.startProject();
personalNewDB.rememberNews();
personalNewDB.showPesonalLevel();
personalNewDB.showMyDb();
personalNewDB.toggleVisibleMyDB();
