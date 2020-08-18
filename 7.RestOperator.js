// When we dont know how may inputs going to pass a particular function rest operator will help ful

//Before

function add(num) {
  console.log("Before:" + num);
}

add(4, 5, 6, 7, 8);

//After

function addWithRest(...num) {
  console.log("After Rest Operator:" + num);
}

addWithRest(4, 5, 6, 7, 8);
