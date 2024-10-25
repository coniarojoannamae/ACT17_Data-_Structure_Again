//-----------------------LIST-------------------------
let restaurantId = [1, 2, 3, 4, 5]
let restaurantName = ["Vikings Luxury Buffet", "Antonio's Restaurant", "Mesa Filipino Moderne", "Manam Comfort Filipino", "Ramen Nagi"]
let restauranLocation= ["Pasay City", "Tagaytay", "Makati City", "Quezon City", "Various Locations"]
let restaurantType = ["Buffet", "Fine Dining", "Filipino", "Filipino", "Japanese"]
let restaurantYear = [2011, 2002, 2009, 2013, 2013]
let restaurantWeb = ["www.vikings.ph", "www.antoniosrestaurant.ph", "www.mesa.ph", "www.manam.ph", "www.ramennagi.com.ph"]

// Get the 'Tables Column' element from the HTML
let restoIdElement = document.getElementById('resto-id-list');
let restoNameElement = document.getElementById('resto-name-list');
let restoLocElement = document.getElementById('resto-loc-list');
let restoTypeElement = document.getElementById('resto-type-list');
let restoYearElement = document.getElementById('resto-year-list');
let restoWebElement = document.getElementById('resto-web-list');

// Populate the list in HTML

//Restaurant Id
restaurantId.forEach(id => {
    let listItem = document.createElement('li');
    listItem.textContent = id;
    restoIdElement.appendChild(listItem);
});

//Restaurant Name
restaurantName.forEach(name => {
    let listItem = document.createElement('li');
    listItem.textContent = name;
    restoNameElement.appendChild(listItem);
});

//Restaurant Location
restauranLocation.forEach(loc => {
    let listItem = document.createElement('li');
    listItem.textContent = loc;
    restoLocElement.appendChild(listItem);
});

//Restaurant Cuisine Type
restaurantType.forEach(type => {
    let listItem = document.createElement('li');
    listItem.textContent = type;
    restoTypeElement.appendChild(listItem);
});

//Restaurant Established Year 
restaurantYear.forEach(year => {
    let listItem = document.createElement('li');
    listItem.textContent = year;
    restoYearElement.appendChild(listItem);
});


//Restaurant Website or Contact
restaurantWeb.forEach(web => {
    let listItem = document.createElement('li');
    listItem.textContent = web;
    restoWebElement.appendChild(listItem);
});

//-----------------------OBJECT-------------------------

let resto1 = {
    id: 1,
    name: "Vikings Luxury Buffet",
    location: "Pasay City",
    cuisineType: "Buffet",
    establishedYear: 2011,
    website: "http://www.vikings.ph"
};

let resto2 = {
    id: 2,
    name: "Antonio's Restaurant",
    location: "Tagaytay",
    cuisineType: "Fine Dining",
    establishedYear: 2002,
    website: "http://www.antoniosrestaurant.ph"
};

let resto3 = {
    id: 3,
    name: "Mesa Filipino Moderne",
    location: "Makati City",
    cuisineType: "Filipino",
    establishedYear: 2009,
    website: "http://www.mesa.ph"
};

let resto4 = {
    id: 4,
    name: "Manam Comfort Filipino",
    location: "Quezon City",
    cuisineType: "Filipino",
    establishedYear: 2013,
    website: "http://www.manam.ph"
};


let resto5 = {
    id: 5,
    name: "Ramen Nagi",
    location: "Various Locations",
    cuisineType: "Japanese",
    establishedYear: 2013,
    website: "http://www.ramennagi.com.ph"
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
populateObjectTable(resto1);
populateObjectTable(resto2);
populateObjectTable(resto3);
populateObjectTable(resto4);
populateObjectTable(resto5);


//--------------LIST OF OBJECTS-------------------------
const restaurants = [
    {
        id: 1,
        name: "Vikings Luxury Buffet",
        location: "Pasay City",
        cuisineType: "Buffet",
        establishedYear: 2011,
        website: "http://www.vikings.ph"
    },
    {
        id: 2,
        name: "Antonio's Restaurant",
        location: "Tagaytay",
        cuisineType: "Fine Dining",
        establishedYear: 2002,
        website: "http://www.antoniosrestaurant.ph"
    },
    {
        id: 3,
        name: "Mesa Filipino Moderne",
        location: "Makati City",
        cuisineType: "Filipino",
        establishedYear: 2009,
        website: "http://www.mesa.ph"
    },
    {
        id: 4,
        name: "Manam Comfort Filipino",
        location: "Quezon City",
        cuisineType: "Filipino",
        establishedYear: 2013,
        website: "http://www.manam.ph"
    },
    {
        id: 5,
        name: "Ramen Nagi",
        location: "Various Locations",
        cuisineType: "Japanese",
        establishedYear: 2013,
        website: "http://www.ramennagi.com.ph"
    }
];

// Function to populate the table
document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#restaurantTable tbody");

    restaurants.forEach(restaurant => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${restaurant.id}</td>
            <td>${restaurant.name}</td>
            <td>${restaurant.location}</td>
            <td>${restaurant.cuisine}</td>
            <td>${restaurant.year}</td>
            <td><a href="https://${restaurant.website}" target="_blank">${restaurant.website}</a></td>
        `;

        tableBody.appendChild(row);
    });
});

