/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

function displayCurrentTime(e) {
  // your code goes in here
  const date = new Date();
  let h = date.getHours(); //0-24;
  let m = date.getMinutes(); //0-59;
  let s = date.getSeconds(); //0-59;

  //conditions 
  h = (h == 0) ? h = "12" : h;
  h = (h > 12) ? h = h - 12 : h; //added this condition to change the click for 24 hour to 12 hour click
  h = (h < 10) ? h = "0" + h : h; // this condition added 0 string when the hour is less the 10 
  m = (m < 10) ? m = "0" + m : m; // this condition added 0 string when the minutes is less the 10 
  s = (s < 10) ? s = "0" + s : s; // this condition added 0 string when the second is less the 10 


  session = "AM"

  if (h < 12) {
    session = "PM"
  }

  // concatenated the HH ,MM ,SS together and appended to the Dom
  time = h + " : " + m + ' : ' + s + " " + session;
  let watch = document.getElementById('watch');
  watch.innerHTML = time;
  // document.body.className="clock" // calling Css style using className Method
  let style = document.body.style;
  style.color = "black";
  style.position = "absolute";
  style.top = "50%";
  style.left = "50%";
  style.transform = 'translateY(-50%)';
  style.transform = 'translateX(-50%)';
  style.border = '1px solid #fff';
  style.padding = "15px";
  style.fontSize = "50px"
  style.backgroundColor = "rgb('+e.offsetX+','+e.offsetY+',40)"





  // setTimeout( displayCurrentTime, 1000);// prevent delay one second when u refresh the page
}
// displayCurrentTime()

setInterval(displayCurrentTime, 1000);