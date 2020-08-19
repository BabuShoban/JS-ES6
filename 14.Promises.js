//promises are used to resolve asynchronious operations
//promises have two values params  resolve and reject
//resolve execute in then block when it is successfull
//reject will execute when it is error or failure

const UserdataValidation = new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = true;
    if (user) {
      resolve({
        firstname: "Shoban",
        lastName: "Manohar",
        age: 27,
      });
    } else {
      reject("This user is not attched ");
    }
  }, 3000);
});

UserdataValidation.then((success) => console.log(success)).catch((error) =>
  console.log(error)
);
