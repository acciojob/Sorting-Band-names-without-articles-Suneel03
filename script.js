//your code here
let regexp = /\bthe\b|\ban\b|\ba\b/gi;
// "$ rockey launched $ $ rocket"
//console.log(str.replace(regexp, "$"));

let arr =  ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];;

let articleLessArray = [];

let mp = {};
// {aricleLessItem: ""}

for (let i = 0; i < arr.length; i++) {
  let articleLessItem = arr[i].replace(regexp, "").trim();
  articleLessItem = articleLessItem.replace(/  /g, " "); // remove two spaces with a single space
  articleLessArray.push(articleLessItem);
  mp[articleLessItem] = arr[i];

}

articleLessArray.sort();

let ans = [];

for (let i of articleLessArray) {
  ans.push(mp[i]);
}

console.log(ans);


