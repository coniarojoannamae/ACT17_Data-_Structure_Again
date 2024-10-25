//-----------------------LIST-------------------------

let employeeId = [1, 2, 3, 4, 5]
let employeeName = ["John Doe", "Jane Smith", "Mark Johnson", "Lisa Wong", "Paul McDonald"]
let employeeDept = ["Sales", "Human Resources", "IT", "Marketing", "Finance"]
let employeeAge = [30, 25, 40, 28, 35]
let employeeEmail = ["john.doe@company.com", "jane.smith@company.com", "mark.johnson@company.com", "lisa.wong@company.com", "paul.mcdonald@company.com"]

// Get the 'Tables Column' element from the HTML
let employeeIdElement = document.getElementById('employee-id-list');
let employeeNameElement = document.getElementById('employee-name-list');
let employeeDeptElement = document.getElementById('employee-dept-list');
let employeeAgeElement = document.getElementById('employee-age-list');
let employeeEmailElement = document.getElementById('employee-email-list');


// Populate the list in HTML

//Employee Id
employeeId.forEach(id => {
    let listItem = document.createElement('li');
    listItem.textContent = id;
    employeeIdElement.appendChild(listItem);
});

//Employee Name
employeeName.forEach(name => {
    let listItem = document.createElement('li');
    listItem.textContent = name;
    employeeNameElement.appendChild(listItem);
});

//Employee Department
employeeDept.forEach(dept => {
    let listItem = document.createElement('li');
    listItem.textContent = dept;
    employeeDeptElement.appendChild(listItem);
});

//Employee Age
employeeAge.forEach(age => {
    let listItem = document.createElement('li');
    listItem.textContent = age;
    employeeAgeElement.appendChild(listItem);
});

//Employee Email
employeeEmail.forEach(email => {
    let listItem = document.createElement('li');
    listItem.textContent = email;
    employeeEmailElement.appendChild(listItem);
});



//-----------------------OBJECT-------------------------

let employee1 = {
    ID: 1,
    Name: "John Doe",
    Department:"Sales",
    Age: 30,
    Email: "john.doe@company.com"
};

let employee2 = {
    ID: 2,
    Name: "Jane Smith",
    Department:"Human Resources",
    Age: 25,
    Email: "jane.smith@company.com"
};

let employee3 = {
    ID: 3,
    Name: "Mark Johnson",
    Department:"IT",
    Age: 40,
    Email: "mark.johnson@company.com"
};


let employee4 = {
    ID: 4,
    Name: "Lisa Wong",
    Department:"Sales",
    Age: 30,
    Email: "john.doe@company.com"
};


let employee5 = {
    ID: 5,
    Name: "Paul McDonald",
    Department:"Finance",
    Age: 35,
    Email: "john.doe@company.com"
}

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
populateObjectTable(employee1);
populateObjectTable(employee2);
populateObjectTable(employee3);
populateObjectTable(employee4);
populateObjectTable(employee5);


//--------------LIST OF OBJECTS-------------------------

const employees = [
    { id: 1, name: "John Doe", department: "Sales", age: 30, email: "john.doe@company.com" },
    { id: 2, name: "Jane Smith", department: "Human Resources", age: 25, email: "jane.smith@company.com" },
    { id: 3, name: "Mark Johnson", department: "IT", age: 40, email: "mark.johnson@company.com" },
    { id: 4, name: "Lisa Wong", department: "Marketing", age: 28, email: "lisa.wong@company.com" },
    { id: 5, name: "Paul McDonald", department: "Finance", age: 35, email: "paul.mcdonald@company.com" }
];
// Function to populate the table
function populateEmployeeTable() {
    const tableBody = document.querySelector("#employeeTable tbody");

    employees.forEach(employee => {
        // Create a new row
        const row = document.createElement('tr');

        // Create and append the cells
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.age}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
        `;

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table
populateEmployeeTable();
