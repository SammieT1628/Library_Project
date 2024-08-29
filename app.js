console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book {
    constructor(id, title, author, read){
        this.id = id
        this.title = title
        this.author = author
        this.read = read
    }
}

class Library {
    constructor(books){
        this.newId = books.length
        this.books = books
    }

    addBook(){
        let title = document.getElementById("title").value
        let author = document.getElementById("author").value
        let read = document.getElementById("read").checked
        this.newId++
        const book = new Book(this.newId, title, author, read)
        this.books.push(book)

        let table = document.getElementById("table")

        let row = document.createElement("tr")
        row.id = book.id

        let nTitle = document.createElement("td")
        nTitle.textContent = title

        let nAuthor = document.createElement("td")
        nAuthor.textContent = author

        let nRead = document.createElement("td")
        let nCheckbox = document.createElement("INPUT")
        nCheckbox.setAttribute("type", "checkbox")
        nCheckbox.id = book.id
        nCheckbox.checked = read
        nCheckbox.disabled = read

        let nRemoveButton = document.createElement("INPUT")
        nRemoveButton.id = row.id
        nRemoveButton.setAttribute("type", "button")
        nRemoveButton.value = "Remove"

        nRead.addEventListener('click', (event) => {
            console.log(event.target)
            console.log(event.target.id)
            this.markRead(event.target, parseInt(event.target.id))
        })
        nRead.appendChild(nCheckbox)
        row.append(nTitle, nAuthor, nRead, nRemoveButton)
        table.appendChild(row)

        nRemoveButton.addEventListener('click', (event)=>{
            this.removeBook(parseInt(event.target.id))
        })
    }

    removeBook(bookId){
        const table = document.getElementById("table")
        table.removeChild(document.getElementById(bookId)) 
        this.books = this.books.filter(({id})=> bookId !== parseInt(id))
    }

    markRead(checkbox, id){
        this.books.forEach((book)=>{
            if(book.id === id){
                book.read = true
                checkbox.checked = true
                checkbox.disabled = true
            }
        })
    }
}

const books = [
    {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    }
]

let library = new Library(books)
let addBook = document.getElementById("submit")
addBook.addEventListener("click", () => {
    library.addBook()
})