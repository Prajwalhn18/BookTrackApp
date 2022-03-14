const addBookButton = document.getElementById('add-book-button');
const bookName = document.querySelector('#book-name');
const bookAdd = document.getElementById('books');

addBookButton.addEventListener('click', addBook);

let bookList = ['book1', 'book2'];

function addBook(e) {
    e.preventDefault();
    bookList.push(bookName.value);
    for (let i = 0; i < bookList.length; i++) {
        console.log(bookList[i]);
        bookAdd.innerHTML += <li>`${bookList[i]}`</li>;
    }
}
