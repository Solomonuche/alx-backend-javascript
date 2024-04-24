interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
    firstName: "Solomon",
    lastName: "Uche",
    age: 23,
    location: "NG",
}

const student2: Student = {
    firstName: "Brown",
    lastName: "Henry",
    age: 29,
    location: "NG",
}

const studentsList = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((value) => {
    table.innerHTML +=
    `<tr>
    <td>${value.firstName}</td>
    <td>${value.location}</td>
    </tr>`;
});

document.body.appendChild(table)

