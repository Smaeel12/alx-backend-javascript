interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    const headerFirstName = document.createElement("th");
    headerFirstName.textContent = "First Name";
    const headerLocation = document.createElement("th");
    headerLocation.textContent = "Location";

    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);
    table.appendChild(headerRow);

    studentsList.forEach(student => {
        const row = document.createElement("tr");

        const cellFirstName = document.createElement("td");
        cellFirstName.textContent = student.firstName;

        const cellLocation = document.createElement("td");
        cellLocation.textContent = student.location;

        row.appendChild(cellFirstName);
        row.appendChild(cellLocation);
        table.appendChild(row);
    });

    document.body.appendChild(table);
}

renderTable();
