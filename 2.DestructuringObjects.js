//Reduce the calling the object every time using "." and destruct the tree of calling - limit of calling one by one

const place = {
  name: "Shoban Babu",
  lives: "India",
  address: {
    city: "coimbatore",
  },
};

//before ES6

console.log(place.name);
console.log(place.address.city);

//after ES6

const {
  name,
  lives,
  address: { city },
} = place;

console.log(`${name} lives in ${lives} and city is ${city}`);
