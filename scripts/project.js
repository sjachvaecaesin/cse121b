let schoolList = [];
let studentList = [];
let formatList = [];

const getStudents = (school) => {
    school.forEach(currentStudent => {
        studentList.push(currentStudent);
    });
    console.log(studentList);
    formatStudents(studentList);
}

const getSchool = async () => {
    const response = (await fetch("https://sjachvaecaesin.github.io/cse121b/csvjson.json"));
    if (response.ok) {
        const data = await response.json();
        schoolList.push(data);
    }
    schoolList.forEach(students => {
        getStudents(students);
    });
}

function formatStudents(students) {
    students.forEach(currentStudent => {
        let student = {
            name: currentStudent.StudentName,
            grade: currentStudent.CourseAverage
        };
        console.log(student);
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
