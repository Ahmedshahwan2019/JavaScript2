/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

//Change the font family 
document.body.style.fontFamily = " Arial, sans-serif ";

// Replace each of the spans with my own information.
document.querySelector('#nickname').textContent = " Ahmed";
document.querySelector('#fav-food').textContent = " Shawrma";
document.querySelector('#hometown').textContent = " Palestine";

// getting the li from the Dom
let li = document.getElementsByTagName('li');

//Iterate through each li using For loop
for (let i = 0; i < li.length; i++) {
  const liItemsEls = li[i];

  liItemsEls.setAttribute('class', 'list-item')
}
// Storing an image link in variable 
let photo = "https://media.resources.festicket.com/www/photos/12093-artwork.jpg";

//Create a image Element and appended to the Dom
const imgEl = document.createElement('img');
imgEl.src = photo
document.body.appendChild(imgEl)