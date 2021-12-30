const bookTypeChoice = document.getElementById('book-select');
const btnBookCheck = document.querySelector('.check--books');
const btnAddNewBook = document.querySelector('.add--new--book');
const result = document.querySelector('.result');
const inputAddType = document.querySelector('#add-book-type');
const inputAddTitle = document.querySelector('#add-book-title');
const inputAddPages = document.querySelector('#add-book-pages');
let bookAddBoolean = false;


// books.push()

let books = [
    {
      "type": "horror",
      "title": 'horror bobobo',
      "pages": 90
    },
    {
      "type": "fantasy",
      "title": 'fantasy asdasd',
      "pages": 1345
    },
    {
        "type": "historical",
        "title": 'historical vavav',
        "pages": 789
      },
      {
        "type": "romance",
        "title": 'romance qwerty',
        "pages": 145
      },
      {
        "type": "fantasy",
        "title": 'fantasy blabla',
        "pages": 300
      },
      {
        "type": "horror",
        "title": 'horror fafafa',
        "pages": 256
      }
    
  ]

  const checkBook = () => {
      const bookType = bookTypeChoice.value; 
      books.map(book => {
          if(bookType == book.type) {
              result.textContent += `${book.type} ${book.title}  ${book.pages}, `;
          }
      })


  };


  const checkBookType = () => {
    const matches = inputAddType.value.match(/\d+/g);
    if (matches != null) {
    alert('You can\'t use number in books title');
    }
    else {
    bookAddBoolean = true;
    }
  };

  

  const addNewBook = () => {
      checkBookType();

      if(bookAddBoolean) {
      let bookType = inputAddType.value;
      let bookTitle = inputAddTitle.value;
      let bookPages = inputAddPages.value;
      var option = document.createElement("option");
      option.text = `${bookType}`;
      bookTypeChoice.add(option);
      books.push({
        "type": `${bookType}`,
        "title": `${bookTitle}`,
        "pages": `${bookPages}`
      })
      console.log(books)
      inputAddType.value = '';
      inputAddTitle.value = '';
      inputAddPages.value = '';
      }
      else {
          console.log('Something wrong')
      }
      
  };


  btnBookCheck.addEventListener('click', checkBook)
  btnAddNewBook.addEventListener('click', addNewBook)

  
