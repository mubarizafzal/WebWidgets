console.log("ello");

fetch('../img/1.jpg').then(response => {
  console.log(response);
  // this can contain a lot of different data, we move on with only the part we need, which is blob
  return response.blob();
}).then(blob => {
  // response to the next promise
  console.log(blob);
  document.getElementById('image1').src = URL.createObjectURL(blob);
  // we use the createObjectURL function to turn the blob into an acceptable url for the SRC property
})

getPic2().catch(error => {
  console.log('error!');
  console.log(error);
});

async function getPic2() {
  const response = await fetch('../img/2.jpg');
  const blob = await response.blob();
  var img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  img.width = 400;
  document.getElementById('container').append(img);
}

/*
  TODO:
    - select where to search through: definitions, synonyms, examples
    - write JS functionality
    - use of vendor code??
    - interact with YouTube API
    - home, contact, about disappearing when other is selected, only one shown at a time
    - right side has videos of silent watcher, search feature use for this

*/