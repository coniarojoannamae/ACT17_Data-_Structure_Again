//-----------------------LIST-------------------------

let productId = [1, 2, 3, 4, 5];
let productNames = ["Laptop", "Desk Chair", "Smartwatch", "Notebook", "Running Shoes"];
let productCategory= ["Electronics", "Furniture", "Electronics", "Stationery", "Apparel"];
let productPrice= [750, 100, 200, 5, 80]
let productStock = [50, 200, 150, 500, 100]
let productEmail = ["supplier1@gmail.com", "supplier2@gmail.com", "supplier3@gmail.com", "supplier4@gmail.com", "supplier5@gmail.com"]


// Get the 'Tables Column' element from the HTML
let productNamesElement = document.getElementById('product-names-list');
let productCategoryElement = document.getElementById('product-category-list');
let productIdElement = document.getElementById('product-id-list');
let productPriceElement = document.getElementById('product-price-list');
let productStockElement = document.getElementById('product-stock-list');
let productEmailElement = document.getElementById('product-email-list');


// Populate the list in HTML

//Product Id
productId.forEach(id => {
    let listItem = document.createElement('li');
    listItem.textContent = id;
    productIdElement.appendChild(listItem);
});

//Product Name
productNames.forEach(name => {
    let listItem = document.createElement('li');
    listItem.textContent = name;
    productNamesElement.appendChild(listItem);
});

//Product Category
productCategory.forEach(category => {
    let listItem = document.createElement('li');
    listItem.textContent = category;
    productCategoryElement.appendChild(listItem);
});

//Product Price
productPrice.forEach(price => {
    let listItem = document.createElement('li');
    listItem.textContent = price;
    productPriceElement.appendChild(listItem);
});

//Product Stock
productStock.forEach(stock => {
    let listItem = document.createElement('li');
    listItem.textContent = stock;
    productStockElement.appendChild(listItem);
});

//Supplier Email
productEmail.forEach(email => {
    let listItem = document.createElement('li');
    listItem.textContent = email;
    productEmailElement.appendChild(listItem);
});



//-----------------------OBJECT-------------------------

let product1 = {
    ID: 1,
    Name: "Laptop",
    Category: "Electronics",
    Price: 750,
    Stock: 50,
    SupplierEmail: "supplier1@gmail.com"
};

let product2 = {
    ID: 2,
    Name: "Desk Chair",
    Category: "Furniture",
    Price: 200,
    Stock: 150,
    SupplierEmail: "supplier2@gmail.com"
};

let product3 = {
    ID: 3,
    Name: "Smartwatch",
    Category: "Electronics",
    Price: 100,
    Stock: 200,
    SupplierEmail: "supplier3@gmail.com"
};

let product4 = {
    ID: 4,
    Name: "Notebook",
    Category: "Stationery",
    Price: 5,
    Stock: 500,
    SupplierEmail: "supplier4@gmail.com"
};

let product5 = {
    ID: 5,
    Name: "Running Shoes",
    Category: "Apparel",
    Price: 80,
    Stock: 100,
    SupplierEmail: "supplier5@gmail.com"
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
populateObjectTable(product1);
populateObjectTable(product2);
populateObjectTable(product3);
populateObjectTable(product4);
populateObjectTable(product5);


//--------------LIST OF OBJECTS-------------------------

let products = [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 750, "stock": 50, "supplierEmail": "supplier1@gmail.com" },
    { "id": 2, "name": "Desk Chair", "category": "Furniture", "price": 100, "stock": 200, "supplierEmail": "supplier2@gmail.com" },
    { "id": 3, "name": "Smartwatch", "category": "Electronics", "price": 200, "stock": 150, "supplierEmail": "supplier3@gmail.com" },
    { "id": 4, "name": "Notebook", "category": "Stationery", "price": 5, "stock": 500, "supplierEmail": "supplier4@gmail.com" },
    { "id": 5, "name": "Running Shoes", "category": "Apparel", "price": 80, "stock": 100, "supplierEmail": "supplier5@gmail.com" }
];

// Function to populate the table with JSON data
function populateTable() {
    let tableBody = document.querySelector("#product-table tbody");
    
    // Loop through each product in the JSON array
    products.forEach(product => {
        // Create a new row (tr) element
        let row = document.createElement('tr');
        
        // Insert columns (td) for each property of the product
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.supplierEmail}</td>
        `;
        
        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table
populateTable();
