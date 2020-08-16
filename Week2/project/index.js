/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

//  Note: the project is not complete


const increaseBtn = document.getElementById('plus')
const decreaseBtn = document.getElementById('minus')
const timeSet = document.querySelector('.time-set')
const timeLeft = document.querySelector('.count-down')
const playBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause')



increaseBtn.addEventListener('click', () => {
  const convertStrToNum = parseInt(timeSet.textContent);
  console.log(convertStrToNum);
  const mainSession = timeSet.textContent = convertStrToNum + 1
  console.log(mainSession);
  timeLeft.textContent = `${mainSession}:00`;
})

decreaseBtn.addEventListener('click', () => {
  const convertStrToNum = parseInt(timeSet.textContent);
  console.log(convertStrToNum);
  const mainSession = timeSet.textContent = convertStrToNum - 1
  if (mainSession < 0) {
    return timeLeft.textContent = "Time is up!";
  }
  timeLeft.textContent = `${mainSession}:00`

})
let countDown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds)
  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countDown)
      return;
    }
    displayTimeLeft(secondsLeft)
  }, 1000);
}



const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60
  const display = `${minutes}:${reminderSeconds < 10 ? "0":''} ${reminderSeconds}`
  timeLeft.textContent = display;
}