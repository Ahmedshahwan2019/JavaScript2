/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the 
 "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep
  walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat 
 dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the
  img with the original image and have it continue the walk.
 
*/


// ==========================THIS EXERCISE DONE BY TEACHER HELP============================


//Storing the image into variable
const walkingCat = document.querySelector('img');

//the position of the cat images
let position = -walkingCat.width;
walkingCat.style.left = position + "px";

//movement steps of the cat 
let steps = 10;
hasDance = false;
//set the images into variable 
const walking = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'
const dancingCat = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'

//create a function to make the cat walk
function catWalk() {

  position += steps;
  walkingCat.style.left = position + 'px'

  //condition check if the cat image outside if the windows if so , make it start again from the beginning
  if (position > window.innerWidth) {
    position = -walkingCat.width;
    console.log('reset Position', position)
    hasDance = false;
  }
  //check if the cat in the middle of screen and dance
  if (!hasDance && position > innerWidth / 2) {
    walkingCat.src = dancingCat;
    hasDance = true;

    // set time out 5 seconds for the dancing cat
    setTimeout(() => {
      walkingCat.src = walking;

      catWalk()

    }, 5000);
  } else {
    setTimeout(catWalk, 50)

  }

}

catWalk()
//  setInterval(catWalk,50)