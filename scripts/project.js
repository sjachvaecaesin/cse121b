let schoolList = [];
let studentList = [];
const studentElement = document.getElementById("students");
const ratingElement = document.getElementById("ratings");

const getStudents = (school) => {
    school.forEach(currentStudent => {
        studentList.push(currentStudent);
    });
    displayStudents(studentList);
    displayRatings(studentList);
}

const getSchool = async () => {
    const response = (await fetch("https://sjachvaecaesin.github.io/cse121b/students.json"));
    if (response.ok) {
        const data = await response.json();
        schoolList.push(data);
    }
    schoolList.forEach(students => {
        getStudents(students);
    });
}

const displayStudents = (students) => {
    students.forEach(student => {
        let article = document.createElement("article");
        let name = document.createElement("h3");
        name.innerHTML = student.StudentName;

        let grades = document.createElement("h4");
        grades.innerHTML = student.CourseAverage;

        article.appendChild(name);
        article.appendChild(grades);
        studentElement.appendChild(article);
    });
}

const displayRatings = (students) => {
    students.forEach(student => {
        let article = document.createElement("article");
        let name = document.createElement("h1");
        name.innerHTML = student.StudentName;

        let grades = document.createElement("h2");
        grades.innerHTML = formula(student.CourseAverage);

        article.appendChild(name);
        article.appendChild(grades);
        ratingElement.appendChild(article);
    });
}

function formula(grades) {
    let a = 0;
    let b = 0;
    let c = 0;
    grades.forEach(grade => {
        a += 1;
        if (grade < 60) {
            b += 1;
        }
        if (grade < 50) {
            c += 1;
        }
    });

    let score = (a - 1) + b + c;
    return score;
}

getSchool();

/*  code possibly implemented in the future for more variable resource readings
function formatStudents(students) {
    students.forEach(currentStudent => {
        if (student.name.localeCompare(currentStudent.StudentName) == 0) {
            student.grades.push(currentStudent.CourseAverage);
        }
        else {
            let x = student.grades.length;
            if (x != 0) {
                formatList.push(student);
            }
            student = new Student("", student.grades);
            student.name = currentStudent.StudentName;
            student.grades.push(currentStudent.CourseAverage);
        }
    });
    console.log(formatList);
} */
