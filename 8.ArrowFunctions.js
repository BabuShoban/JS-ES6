//Function Declaration

function name() {
  return "my name in XXX";
}

//Anonymous function
const FullName = function () {
  return "My full name is XXXX";
};

//Arrowfunction - it will defalut return values declared after arrow function

//with return value
const dinner = (food) => {
  return `My dinner today is ${food} with return`;
};

//without return keyword
const dinnerwithreturn = (food) => `My dinner today is ${food}`;

console.log(dinner("Mutton Biriyani"));
console.log(dinnerwithreturn("chicken biriyani"));
