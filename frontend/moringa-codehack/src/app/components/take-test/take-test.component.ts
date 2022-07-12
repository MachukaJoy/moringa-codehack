import { Component, OnInit } from '@angular/core';
import { KatasService } from 'src/app/services/katas/katas.service';


@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css'],
})


export class TakeTestComponent implements OnInit {
  countdown: boolean;
  
  constructor(private kata: KatasService) {
   this.countdown = true; 
  }

  ngOnInit(): void {
    console.log(this.kata.studentAssessment);
  }
  submitAssessment(){

    alert("Assessment Submitted")
  }
 
}
