//-----------------------LIST-------------------------
let universityId = [1, 2, 3, 4, 5]
let universityName = ["University of the Philippines", "Ateneo de Manila University", "De La Salle University", "University of Santo Tomas", "Polytechnic University of the Philippines"]
let universityLocation = ["Quezon City", "Quezon City", "Manila", "Manila", "Manila"]
let universityEstablishedYear = [1908, 1859, 1911, 1611, 1904]
let universityType = ["Public", "Private", "Private", "Private", "Public"]
let universityWebsite= ["www.up.edu.ph", "www.ateneo.edu", "www.dlsu.edu.ph", "www.ust.edu.ph", "www.pup.edu.ph"]

// Get the 'Tables Column' element from the HTML
let UniIdElement = document.getElementById('Uni-id-list');
let UniNameElement = document.getElementById('Uni-name-list');
let UniLocElement = document.getElementById('Uni-loc-list');
let UniYearElement = document.getElementById('Uni-year-list');
let UniTypeElement = document.getElementById('Uni-type-list');
let UniWebElement = document.getElementById('Uni-web-list');

// Populate the list in HTML

//Univesity Id
universityId.forEach(id => {
    let listItem = document.createElement('li');
    listItem.textContent = id;
    UniIdElement.appendChild(listItem);
});

//Univesity Name
universityName.forEach(name => {
    let listItem = document.createElement('li');
    listItem.textContent = name;
    UniNameElement.appendChild(listItem);
});

//Univesity Location
universityLocation.forEach(loc => {
    let listItem = document.createElement('li');
    listItem.textContent = loc;
    UniLocElement.appendChild(listItem);
});

//Univesity Established Year
universityEstablishedYear.forEach(year => {
    let listItem = document.createElement('li');
    listItem.textContent = year;
    UniYearElement.appendChild(listItem);
});

//Univesity Type
universityType.forEach(type => {
    let listItem = document.createElement('li');
    listItem.textContent = type;
    UniTypeElement.appendChild(listItem);
});

//Univesity Website
universityWebsite.forEach(web => {
    let listItem = document.createElement('li');
    listItem.textContent = web;
    UniWebElement.appendChild(listItem);
});

//-----------------------OBJECT-------------------------

let uni1 = {
    id: 1,
    name: "University of the Philippines",
    location: "Quezon City",
    year: 1908,
    type: "Public",
    website: "www.up.edu.ph"
};

let uni2 = {
    id: 2,
    name: "Ateneo de Manila University",
    location: "Quezon City",
    year: 1859,
    type: "Private",
    website: "www.ateneo.edu"
};

let uni3 = {
    id: 3,
    name: "De La Salle University",
    location: "Manila",
    year: 1911,
    type: "Private",
    website: "www.dlsu.edu.ph"
};

let uni4 = {
    id: 4,
    name: "University of Santo Tomas",
    location: "Manila",
    year: 1611,
    type: "Private",
    website: "www.ust.edu.ph"
};

let uni5 = {
    id: 5,
    name: "Polytechnic University of the Philippines",
    location: "Manila",
    year: 1904,
    type: "Public",
    website: "www.pup.edu.ph"
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
populateObjectTable(uni1);
populateObjectTable(uni2);
populateObjectTable(uni3);
populateObjectTable(uni4);
populateObjectTable(uni5);


//--------------LIST OF OBJECTS-------------------------

const universities = [
    {
        id: 1,
        name: "University of the Philippines",
        location: "Quezon City",
        year: 1908,
        type: "Public",
        website: "www.up.edu.ph"
    },
    {
        id: 2,
        name: "Ateneo de Manila University",
        location: "Quezon City",
        year: 1859,
        type: "Private",
        website: "www.ateneo.edu"
    },
    {
        id: 3,
        name: "De La Salle University",
        location: "Manila",
        year: 1911,
        type: "Private",
        website: "www.dlsu.edu.ph"
    },
    {
        id: 4,
        name: "University of Santo Tomas",
        location: "Manila",
        year: 1611,
        type: "Private",
        website: "www.ust.edu.ph"
    },
    {
        id: 5,
        name: "Polytechnic University of the Philippines",
        location: "Manila",
        year: 1904,
        type: "Public",
        website: "www.pup.edu.ph"
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
