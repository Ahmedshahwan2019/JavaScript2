// Your code goes in here

// Get the elem from the DOM
const costInput = document.querySelector('.cost');
const serviceInput = document.querySelector('.service');
const peopleInput = document.querySelector('.people');
const btnInput = document.getElementById('calculate');
const tipElement = document.querySelector('.tip-wrapper .tip')


function calculateTip() {
  let cost = Number(costInput.value);
  let service = Number(serviceInput.value);
  let people = Number(peopleInput.value);
  let tip = ((cost * service) / 100) / people
  if (costInput.value.length === 0 || serviceInput.value.length === 0 || peopleInput.value.length === 0) {
    alert('please fill the field')
  } else {
    tipElement.textContent = '$' + tip.toFixed(2) + " " + ((people > 1) ? "each" : " ");
  }
}
btnInput.addEventListener('click', calculateTip)