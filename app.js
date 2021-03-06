// book class: represent a book
class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// ui class: handle ui tasks
class UI{
  static displayBooks(){
    const StoredBooks = [
      {
        title: 'book one',
        author: 'john doe'  ,
        isbn :   '3434434'
      },
      {
        title:   'Book two',
        author:   'jane doe',
        isbn :     '45545'
      }
    ];

    const books = StoredBooks;

    // loop through StoredBooks
    books.forEach((book)=>{
      UI.addBookToList(book);
    });
  }
  static addBookToList(book){
      const list = document.querySelector('#book-list');
      const row = document.createElement('tr');
      row.innerHTML = `
            <td> ${book.title}</td>
            <td> ${book.author}</td>
            <td> ${book.isbn}</td>
            <td> <a href="#" class="btn btn-danger btn-sm delete">X</a> </td>
              `;

              list.appendChild(row);
  }

  static deleteBook(el){
      if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
      }
  }

  static clearFields(){
    document.querySelector('#title').value ='';
    document.querySelector('#author').value ='';
    document.querySelector('#isbn').value ='';
  }
}
// store class: handles storage



// event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);



//event: add a book

document.querySelector('#book-form').addEventListener('submit', (e)=>
{
  //prevent actual submit
  e.preventDefault();
  //get form values
  const title = document.querySelector('#title').value ;
  const author = document.querySelector('#author').value;

  const isbn = document.querySelector('#isbn').value;


  // instantite book
  const book = new Book(title, author, isbn);
   console.log(book);

  // add book to list
  UI.addBookToList(book);

  //clear fields
  UI.clearFields();




});


// event to remove a book
document.querySelector('#book-list').addEventListener('click', (e)
=> {
  UI.deleteBook(e.target)
});
