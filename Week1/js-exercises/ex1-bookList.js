/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element

  // Created one ul element and appended to the div
  let bookList = document.getElementById('bookList')
  let ul = document.createElement('ul');
  bookList.appendChild(ul)


  //Iterate through the books array
  for (let i = 0; i < books.length; i++) {
    const BooksEl = books[i];

    // Create li element into the for loop
    let li = document.createElement('li');
    let p = document.createElement('p');
    let imgEl = document.createElement('img');

    // Added the element together
    li.appendChild(p)
    li.appendChild(imgEl)
    ul.appendChild(li)


    // inserting the books title and author to 'P' tag
    p.textContent = BooksEl.title + " ( BY ) " + BooksEl.author;
    imgEl.src = BooksEl.photo

    //Styling the ul ,li and img

    imgEl.style.width = "200px";


    ul.style.listStyle = "none"
    ul.style.display = "flex"


    li.style.margin = "10px"
    li.style.padding = "10px"

    //Added an if statement to check ig the book Already read;
    if (BooksEl.alreadyRead === true) {
      li.style.backgroundColor = "green"
    } else {
      li.style.backgroundColor = "red"
    }


  }

}
//Added new property to the array object and store Images link into the value

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    photo: "https://books.google.nl/books/content?id=nVQPAAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73MhEoxVB2lWVRzWZudhOBoEF3TwpDi9sf5YyS8macSSJAmpp64QQqqTrM4HY7578X0nXMx2ak-FEyKY3l6AFSyXK26DHRBfDvhunSsbweFysTXnFRFHKatDuKiqhAuR5D8O0F0"
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    photo: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/0/1/4/1001004011834109.jpg"
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    photo: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/5/4/8/7/9200000033027845.jpg"
  }
];



let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);