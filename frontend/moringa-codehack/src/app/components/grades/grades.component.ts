import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  assessmentList:any = [];
  studentList:any = [];
  

  constructor(private assessments: QuestionsService, private students: QuestionsService,private answers: QuestionsService ) { 
    
  }

  ngOnInit(): void {
    this.getAssessments()
    this.getStudents()
  }

  getAssessments(){
    this.assessments.get_assesments().subscribe(response =>{
      console.log(response)
      this.assessmentList=response
    })
  }
  getStudents(){
    this.students.get_students().subscribe(response =>{
      console.log(response)
      this.studentList=response
    })
  }

  sendFeedback(a: string, b: string, c: string) {
    let data = {
      assessment: a,
      grade: b,
      feedback: c
    };
    this.answers.add_feedback(data).subscribe((response: any) => {
      console.log(response);
    });
  }

}
