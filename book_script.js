//-----------------------LIST-------------------------
let bookId = [1, 2, 3, 4, 5]
let bookTitle = ["The Great Gatsby", "To Kill a Mockingbird", "1984", "The Catcher in the Rye", "A Brief History of Time"]
let bookAuthor = ["F. Scott Fitzgerald", "Harper Lee", "George Orwell", "J.D. Salinger", "Stephen Hawking"]
let bookGenre = ["Fiction", "Fiction", "Dystopian", "Fiction", "Non-fiction"]
let bookPublishedYear = [1925, 1960, 1949, 1951, 1988]
let bookIsbn = ["978-0743273565", "978-0060935467", "978-0451524935", "978-0316769488", "978-0553380163"]
let bookStock = [20, 35, 40, 25, 10]
let bookPrice = [15.99, 10.99, 9.99, 8.99, 18.99]

// Get the 'Tables Column' element from the HTML
let bookIdElement = document.getElementById('book-id-list');
let bookTitleElement = document.getElementById('book-title-list');
let bookAuthorElement = document.getElementById('book-author-list');
let bookGenreElement = document.getElementById('book-genre-list');
let bookPublishElement = document.getElementById('book-publish-list');
let bookIsbnElement = document.getElementById('book-isbn-list');
let bookStockElement = document.getElementById('book-stock-list');
let bookPriceElement = document.getElementById('book-price-list');


// Populate the list in HTML

//Book Id
bookId.forEach(id => {
    let listItem = document.createElement('li');
    listItem.textContent = id;
    bookIdElement.appendChild(listItem);
});

//Book Title
bookTitle.forEach(title => {
    let listItem = document.createElement('li');
    listItem.textContent = title;
    bookTitleElement.appendChild(listItem);
});

//Book Author
bookAuthor.forEach(author => {
    let listItem = document.createElement('li');
    listItem.textContent = author;
    bookAuthorElement.appendChild(listItem);
});

//Book Genre
bookGenre.forEach(genre => {
    let listItem = document.createElement('li');
    listItem.textContent = genre;
    bookGenreElement.appendChild(listItem);
});

//Book Publish Year
bookPublishedYear.forEach(pub => {
    let listItem = document.createElement('li');
    listItem.textContent = pub;
    bookPublishElement.appendChild(listItem);
});

//Book ISBN
bookIsbn.forEach(isbn => {
    let listItem = document.createElement('li');
    listItem.textContent = isbn;
    bookIsbnElement.appendChild(listItem);
});

//Book Stock
bookStock.forEach(stock => {
    let listItem = document.createElement('li');
    listItem.textContent = stock;
    bookStockElement.appendChild(listItem);
});

//Book Price
bookPrice.forEach(price => {
    let listItem = document.createElement('li');
    listItem.textContent = price;
    bookPriceElement.appendChild(listItem);
});



//-----------------------OBJECT-------------------------

let book1 = {
    Id: 1,
    Title: "The Great Gatsby",
    Author: "F. Scott Fitzgerald",
    Genre: "Fiction",
    Year: 1925,
    Isbn: "978-0743273565",
    Stock: 20,
    Price: 15.99
};

let book2 = {
    Id: 2,
    Title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    Genre: "Fiction",
    Year: 1960,
    Isbn:  "978-0060935467",
    Stock: 35,
    Price: 10.99
};

let book3 = {
    Id: 3,
    Title: "1984",
    Author: "George Orwell",
    Genre: "Dystopian",
    Year: 1949,
    Isbn: "978-0451524935",
    Stock: 40,
    Price: 9.99
};

let book4 = {
    Id: 4,
    Title: "The Catcher in the Rye",
    Author: "J.D. Salinger",
    Genre: "Fiction",
    Year: 1951,
    Isbn: "978-0316769488",
    Stock: 25,
    Price: 8.99
};

let book5= {
    Id: 5,
    Title: "A Brief History of Time",
    Author: "Stephen Hawking",
    Genre: "Non-fiction",
    Year: 1988,
    Isbn: "978-0553380163",
    Stock: 10,
    Price: 18.99
};

// Function to populate the table with object data
function populateObjectTable(obj) {
    const tableBody = document.querySelector("#objectTable tbody");

    // Loop through the object and create table rows
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const row = document.createElement('tr');

            // Create table cells for the key and value
            row.innerHTML = `
                <td>${key}</td>
                <td>${obj[key]}</td>
            `;

            // Append the row to the table body
            tableBody.appendChild(row);
        }
    }
}

// Call the function to populate the table with the object data
populateObjectTable(book1);
populateObjectTable(book2);
populateObjectTable(book3);
populateObjectTable(book4);
populateObjectTable(book5);


//--------------LIST OF OBJECTS-------------------------
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: 1925,
        isbn: "978-0743273565",
        stock: 20,
        price: 15.99
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960,
        isbn: "978-0060935467",
        stock: 35,
        price: 10.99
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949,
        isbn: "978-0451524935",
        stock: 40,
        price: 9.99
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        year: 1951,
        isbn: "978-0316769488",
        stock: 25,
        price: 8.99
    },
    {
        id: 5,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        genre: "Non-fiction",
        year: 1988,
        isbn: "978-0553380163",
        stock: 10,
        price: 18.99
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#booksTable tbody");

    books.forEach(book => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.year}</td>
            <td>${book.isbn}</td>
            <td>${book.stock}</td>
            <td>${book.price}</td>
        `;

        tableBody.appendChild(row);
    });
});
