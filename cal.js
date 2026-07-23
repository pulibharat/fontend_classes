
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