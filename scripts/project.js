let gradesList = [];

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
