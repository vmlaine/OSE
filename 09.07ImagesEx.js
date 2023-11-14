// Create an array with file names of images
let images = ["face.png", "heart.png", "sun.png", "moon.png", "cloud.png"];

function addImages() {
    let show = 0;
    // Use a for loop to show all the images. 
    for (let i = 0; i < images.length; i++) {
        // Use the document.write() method to write one new image element to the web page per each image.
        show = images[i];
        document.write(`<img src='` + show + `' alt='Funny shape'>`);
    }
}