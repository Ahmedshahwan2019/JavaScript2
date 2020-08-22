/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(arr) {
  console.log('this is the original array', arr);
  const uniqueLetters = new Set(arr);
  console.log('return only the unique letter', uniqueLetters);
  const backToArray = [...uniqueLetters];
  console.log('convert the obj to array ', backToArray);
  if (JSON.stringify(backToArray) === JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f'])) {
    console.log("Hooray")
  }
  // console.log(BackToArray);


}


const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);

// if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
//   console.log("Hooray!")