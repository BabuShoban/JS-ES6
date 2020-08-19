//async and await is used for control the async actions in javascript

//before

const photos = [];
function PhotoUploadwithoutasync() {
  let uploadPhoto = new Promise((resolve, reject) => {
    setTimeout(() => {
      photos.push("Profile Pic");
      resolve("Photo Uploaded");
    }, 3000);
  });
  let result = uploadPhoto;

  console.log(result);
  console.log(photos.length);
}

PhotoUploadwithoutasync();

async function PhotoUploadwithasync() {
  let uploadPhoto = new Promise((resolve, reject) => {
    setTimeout(() => {
      photos.push("Profile Pic");
      resolve("Photo Uploaded");
    }, 3000);
  });
  let result = await uploadPhoto;

  console.log(result);
  console.log(photos.length);
}

PhotoUploadwithasync();
