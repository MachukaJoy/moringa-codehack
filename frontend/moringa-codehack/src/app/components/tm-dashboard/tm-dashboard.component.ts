import { Component, OnInit } from '@angular/core';
import { KatasService } from 'src/app/katas.service';

@Component({
  selector: 'app-tm-dashboard',
  templateUrl: './tm-dashboard.component.html',
  styleUrls: ['./tm-dashboard.component.css']
})
export class TmDashboardComponent implements OnInit {

  kataQuestions! : any;
  createdAssessment = 'Venecia';

  constructor(private katas:KatasService) { }

  ngOnInit(): void {


  this.katas.get_katas().subscribe((kata)=> {
    this.kataQuestions = kata;
    console.log(this.kataQuestions)
})



  }
 
sendQuestion(): void {
   this.katas.studentAssessment=this.createdAssessment
   console.log(this.katas.studentAssessment)
  }
}


