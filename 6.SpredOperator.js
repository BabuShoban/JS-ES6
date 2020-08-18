// used to make a new copy of an array or object
//Spread operatror will look like "...""

//Array

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [...shoppingList, "meat", "curd"];

console.log(shoppingBasket);

//Object

const person = {
  name: "Shoban",
  age: 27,
  city: "New york",
};

const employee = {
  ...person,
  salary: "10000",
  company: "TW",
};

console.log(employee);
