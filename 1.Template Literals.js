//Back ticks `` used to in ES6 to concat dynamic strings and can be print next line without using \n
let name1 = "shoban";
let name2 = "babu";

let fullName = `${name1} ${name2}`;
let lineSpace = `${name1}
${name2}`;
console.log(fullName);
console.log(lineSpace);
