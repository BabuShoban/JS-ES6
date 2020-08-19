//Fantastic edition for javascript
//Used for api Testing

fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => {
    response.json;
  })
  .then((data) => {
    console.log(data);
  });

console.log();
