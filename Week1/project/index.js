// your code goes in here

//set a variable to store the value of the selected Elements
let btn = document.querySelector('.btn');
let text = document.querySelector('.blockqoute-text');
//store 6 quotes in an array
let quotes = [`“Learn from the mistakes of others. You can't live long enough to make them all yourself.”   ― Eleanor Roosevelt`,
  `“The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become.”   ― W.E.B. Du Bois`,
  `“Once you replace negative thoughts with positive ones, you'll start having positive results.” ― Willie Nelson`,
  `“Once you choose hope, anything’s possible.”   ― Christopher Reeve`,
  `“When one door closes another opens or you can open the closed door that’s how doors work.”   ― Bill Murry`,
  `“Your Life can easily flow and be filled with joy. Embrace the possibilities!”   ― Leeza Donatella`,
  `“A pessimist is one who makes difficulties of his opportunities and an optimist is one who makes opportunities of his difficulties.”   ― Harry S. Truman`,
  `“Her beauty is laced in her strength and interwoven through her flaws. She embodies perfection.”   ― Kierra C.T. Banks`,
  `“Once we believe in ourselves we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.”   ― e. e. cummings`,
  `“The day, before sleeping; I recalled everything… to crosscheck that - whether I was wrong at any point of time! Then I realized – it’s not mandatory that the way you perceive life will be the same in which others envision it.”    ― Deepak Ranjan`,
]
//create a function to choose random qoute
function random() {
  const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
  return randomQuotes;
}
//set event listener to the btn when clicked change the value of the text and choose random quote
btn.addEventListener('click', function () {
  text.textContent = random();
})