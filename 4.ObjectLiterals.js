//Object literals are used to assign and print the value in one variable

//before

function addressMaker(address) {
  const newAddress = {
    city: address.city,
    state: address.state,
    country: "united states",
  };
  //console.log("Before :" + newAddress);
}

addressMaker({ city: "Austin", state: "Texas" });

//After
function addressMaker(address) {
  const { city, state } = address;
  const newAddress = {
    city, //here we are assigning and returning the values from object
    state,
    country: "united states",
  };
  console.log(`${newAddress.city} ${newAddress.state}`);
}

addressMaker({ city: "Austin", state: "Texas" });
