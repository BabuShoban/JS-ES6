// When arguments not passed to the function it will return undefined
//To over come this we can use default params to the funtion

//without params -  we will get undefined in console
const groceryshop = (product) => {
  console.log(`i'am going to buy ${product} in grocery shop`);
};

groceryshop();

//Default param - will give always default value if not passed in argument

const groceryDefaultParm = (product = "something") => {
  console.log(`i'am going to buy ${product} default in grocery shop`);
};

groceryDefaultParm();
