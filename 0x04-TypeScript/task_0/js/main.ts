interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// student objects
const firstStudent: Student = {
	firstName: "Martha",
	lastName: "Ukpong",
	age:34,
	location: "Yenagoa"
}

const secondStudent: Student = {
	firstName: "Utibe",
	lastName: "Ekanem",
	age:23,
	location: "Uyo"
}

// array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;


// row for each student 
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
