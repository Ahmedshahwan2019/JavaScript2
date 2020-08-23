/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */


function dayWorth(tasks, hourlyRate) {
  // put your code in here, the function does returns a euro formatted string
  // let mondayRate = tasks.map(rate => (Math.round(rate.duration / 60) * hourlyRate)); 

  //for shorting the code I implement the solution in the return

  return tasks.map(rate => (Math.round(rate.duration / 60) * hourlyRate));;

}

const mondayTasks = [{
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

let total1 = dayWorth(mondayTasks, 25)
const sumOfTheTotal1 = total1.reduce((acc, currentResult) => acc + currentResult, 0);
console.log(`your hourly rate on a Monday would be ${sumOfTheTotal1} $`)
let total2 = dayWorth(mondayTasks, 13.37)
const sumOfTheTotal2 = total2.reduce((acc, currentResult) => acc + currentResult, 0);
console.log(`your hourly rate on a Monday would be ${Math.round(sumOfTheTotal2)} $`)