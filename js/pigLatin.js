exports.translate = function (word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const word_sep = word.split(" ");
  let res_str = [];

  for (let i = 0; i < word_sep.length; i++) {
    let index = [...word_sep[i].toLowerCase()].findIndex((str) =>
      vowels.includes(str)
    );
    if (word_sep[i][index] == "u") {
      res_str.push(
        word_sep[i].slice(index + 1) + word_sep[i].slice(0, index + 1) + "ay"
      );
    } else if (index) {
      res_str.push(
        word_sep[i].slice(index) + word_sep[i].slice(0, index) + "ay"
      );
    } else {
      res_str.push(word_sep[i] + "ay");
    }
  }
  return res_str.join(" ");
};

// console.log(translate("apple"));
// console.log(translate("apple university"));
// console.log(translate("banana"));
// console.log(translate("cherry"));
// console.log(translate("eat pie"));
// console.log(translate("three"));
// console.log(translate("school"));
// console.log(translate("quiet"));
// console.log(translate("square"));
// console.log(translate("the quick brown fox"));
