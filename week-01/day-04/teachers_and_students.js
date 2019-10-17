'use strict';
// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student{
  learn(){
    console.log('the student is learning something new');
  }
  question(teacher){
    teacher.answer();
  }
}

class Teacher{
  teach(student){
    student.learn();
  }
  answer(){
    console.log('the teacher is answering a question');
  }
}


var stupid_student = new Student();
var smart_af_teacher = new Teacher();

stupid_student.question(smart_af_teacher)
smart_af_teacher.teach(stupid_student)