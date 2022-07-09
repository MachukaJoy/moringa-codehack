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
    // var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    // var yValues = [55, 49, 44, 24, 15];
    // var barColors = [
    //   "#b91d47",
    //   "#00aba9",
    //   "#2b5797",
    //   "#e8c3b9",
    //   "#1e7145"
    // ];

    // new Chart("myChart", {
    //   type: "doughnut",
    //   data: {
    //     labels: xValues,
    //     datasets: [{
    //       backgroundColor: barColors,
    //       data: yValues
    //     }]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: "World Wide Wine Production 2018"
    //     }
    //   }
    // });




  }
 
sendQuestion(): void {
   this.katas.studentAssessment=this.createdAssessment
   console.log(this.katas.studentAssessment)
  }
}


