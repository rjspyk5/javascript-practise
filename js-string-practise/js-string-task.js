// Count how many times a string has the letter a
const names = "My name is Rakibul Islam";
const nam = names.toLocaleLowerCase();

let aCount = 0;
for (const name of nam) {
  if (name == "a") {
    aCount++;
  }
}
// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
const statement = "hello this is a xline which will be cheched that";
const answer = statement.includes("i" && "a" && "e" && "o" && "u");

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

if (statement.includes("x" || "X")) {
  const changed = statement.replace("x", "Y");
}
// Task-5:
// Capitalize Every first Letter of each word in a String
const statementt =
  "hello this is a xline which will be cheched that.this is the test for doing first letter at uppercase.ok";

const ChangeFirstLetter = (statementt) => {
  const changed = [];
  let before = "";
  for (let index = 0; index < statementt.length; index++) {
    if (before === " " || before === "." || index === 0) {
      changed.push(statementt[index].toUpperCase());
    } else {
      changed.push(statementt[index]);
    }
    before = statementt[index];
  }
  return changed.join("");
};
console.log(ChangeFirstLetter(statementt));
