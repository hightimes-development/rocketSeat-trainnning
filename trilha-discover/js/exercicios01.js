let weight;
console.log(typeof weight);
//
let name = "Fernando";
let age = 44;
let stars = 4.4;
let isSubscribed = true;
//
let student = {
    studyName: "Fernando", 
    studyAge: 44,
    studyStars: 4.4,
    studySubscribed: true,
};
console.log(typeof student);
console.log(`O aluno ${student.studyName} é ${student.studyStars} estrlas!!`);
let students = [
    student,
];
console.log(students);
console.log(students[0]);
let newStudent = {
    studyName: "Aurélio", 
    studyAge: 15,
    studyStars: 4.3,
    studySubscribed: true,
};
students[1] = newStudent;
console.log(students);
console.log(students[0]);
console.log(students[1]);