
const marks = 85;
const grade = (marks >= 90) ? "A" : (marks >= 80) ? "B" : "C";
console.log("Grade: " + grade);

//simple student calculator using switch case
switch (true) {
    case (marks >= 90):
        console.log("Excellent");
        break;  
    case (marks >= 80):
        console.log("Good");
        break;
    default:
        console.log("Needs Improvement");
}


// student grade calculator for 6 subjects     
const subjects = ["Math", "Science", "English", "History", "Geography", "Physical Education"];
const subjectMarks = [85, 92, 78, 88, 95, 82];
let totalMarks = 0;
for (let i = 0; i < subjectMarks.length; i++) {
    totalMarks += subjectMarks[i];
}

const averageMark = totalMarks / subjectMarks.length;
const overallGrade = (averageMark >= 90) ? "A" : (averageMark >= 80) ? "B" : "C";

console.log("Average Mark: " + averageMark);
console.log("Overall Grade: " + overallGrade);