// search project: 1402,5,8 => team : mahsa
// search kon bebin shamel kalamate reshte hast ya na.
// agar boud moghiat on ham neshon bede.
let string = "my world is mahsa";
function finder(string, word) {
  let result = "";
  let place = [];
  result = string.includes(word);
  place = string.search(word);
  console.log(result);
  console.log(place);
}
finder(string, "mahsa");
// kalame toye reshte ro ba ye string dige replace kon.
function findAndReplace(string, word, replace) {
  let replaceString = "";
  replaceString = string.replace(word, replace);
  console.log(replaceString);
}
findAndReplace(string, "mahsa", "just myself :))");
