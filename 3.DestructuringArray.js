//before ES6
let name = ["Shoban", "babu", "manohar"];

console.log(name);

//after

let [firstname, middleName, lastName] = name;

console.log(lastName);
lastName = "mano";
console.log(firstname);
console.log(lastName);
